// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROUTE_TREE = resolve(__dirname, "src", "routeTree.gen.ts");
const ROUTE_TREE_BAK = resolve(__dirname, "src", "routeTree.gen.ts.bak");

/**
 * This plugin runs AFTER the @tanstack/router-plugin (which may overwrite
 * routeTree.gen.ts and drop the /admin route). In buildStart we detect if
 * /admin was removed and restore from backup.
 */
function protectRouteTree(): Plugin {
  return {
    name: "protect-route-tree",
    // enforce: "post" makes this run after all other plugins in buildStart
    enforce: "post",
    buildStart() {
      try {
        if (!existsSync(ROUTE_TREE)) return;
        const content = readFileSync(ROUTE_TREE, "utf-8");
        const hasAdmin =
          content.includes("'/admin'") || content.includes('"/admin"');

        if (!hasAdmin) {
          console.warn(
            "[protect-route-tree] ⚠️  /admin route MISSING from routeTree.gen.ts — restoring from backup.",
          );
          if (existsSync(ROUTE_TREE_BAK)) {
            const bak = readFileSync(ROUTE_TREE_BAK, "utf-8");
            writeFileSync(ROUTE_TREE, bak, "utf-8");
            console.log("[protect-route-tree] ✅ Restored from .bak");
          } else {
            console.error(
              "[protect-route-tree] ❌ No backup found — /admin route will be missing!",
            );
          }
        } else {
          // Keep backup fresh
          writeFileSync(ROUTE_TREE_BAK, content, "utf-8");
          console.log(
            "[protect-route-tree] ✅ routeTree.gen.ts has /admin — backup updated.",
          );
        }
      } catch (err) {
        console.error("[protect-route-tree] Error:", err);
      }
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // Disable automatic route tree regeneration to preserve the committed
    // routeTree.gen.ts (which has /admin). The protectRouteTree plugin below
    // provides a second layer of protection regardless.
    enableRouteGeneration: false,
  },
  vite: {
    plugins: [protectRouteTree()],
  },
  nitro: {
    // Use the Vercel preset so Nitro generates output compatible with Vercel
    // instead of the default Cloudflare Workers preset.
    preset: "vercel",
  },
});
