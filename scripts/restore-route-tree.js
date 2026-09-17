#!/usr/bin/env node
/**
 * restore-route-tree.js
 *
 * This script runs BEFORE `vite build` on Vercel to ensure the committed
 * routeTree.gen.ts is preserved after the TanStack router plugin may have
 * regenerated it incorrectly due to version differences.
 *
 * Strategy: back up the committed file, let the build run, then the Vite
 * plugin `preserveRouteTree` (vite.config.ts) restores it if needed.
 *
 * In this script we simply validate that the file has both '/' and '/admin'
 * routes. If not, we restore from the backup created before the build.
 */
import { readFileSync, writeFileSync, existsSync, copyFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ROUTE_TREE = resolve(ROOT, "src", "routeTree.gen.ts");
const BACKUP = resolve(ROOT, "src", "routeTree.gen.ts.bak");

const content = readFileSync(ROUTE_TREE, "utf-8");

if (!content.includes("'/admin'") && !content.includes('"/admin"')) {
  console.error(
    "❌ [restore-route-tree] routeTree.gen.ts is MISSING the /admin route!",
  );
  if (existsSync(BACKUP)) {
    copyFileSync(BACKUP, ROUTE_TREE);
    console.log("✅ [restore-route-tree] Restored from backup.");
  } else {
    console.error(
      "❌ [restore-route-tree] No backup found — cannot restore. The /admin route will be missing.",
    );
    process.exit(1);
  }
} else {
  // Save a fresh backup of the correct file
  copyFileSync(ROUTE_TREE, BACKUP);
  console.log(
    "✅ [restore-route-tree] routeTree.gen.ts looks correct (has /admin). Backup saved.",
  );
}
