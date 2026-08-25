import React, { useState, useEffect, useCallback } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Lock,
  LogOut,
  Plus,
  Trash2,
  Save,
  Settings,
  Briefcase,
  Image,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  Star,
  ShieldCheck,
  AlertCircle,
  Loader2,
  X,
  GripVertical,
  ExternalLink,
} from "lucide-react";
import {
  adminStore,
  type ServiceItem,
  type PortfolioItem,
  type SiteSettings,
  DEFAULT_SERVICES,
  DEFAULT_PORTFOLIO,
  DEFAULT_SETTINGS,
} from "../lib/admin-store";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "ByteKwanza Admin — Painel de Controlo" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

// ─── Utility ──────────────────────────────────────────────────────────────────
function uid() {
  return Math.random().toString(36).slice(2, 10);
}

// ─── Session helpers (in-memory only) ────────────────────────────────────────
const SESSION_KEY = "bk_admin_session";
function getSession() {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}
function setSession() {
  sessionStorage.setItem(SESSION_KEY, "1");
}
function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────
type Tab = "servicos" | "portfolio" | "definicoes";

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({
  msg,
  type,
  onClose,
}: {
  msg: string;
  type: "success" | "error";
  onClose: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onClose, 3200);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div
      className={`fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-2xl px-5 py-3.5 text-sm font-semibold shadow-2xl animation-slide-up ${
        type === "success"
          ? "bg-emerald-500 text-white"
          : "bg-red-500 text-white"
      }`}
      style={{ animation: "slideUp 0.3s ease" }}
    >
      {type === "success" ? (
        <ShieldCheck className="h-4 w-4 flex-none" />
      ) : (
        <AlertCircle className="h-4 w-4 flex-none" />
      )}
      {msg}
      <button onClick={onClose} className="ml-2 opacity-80 hover:opacity-100">
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

// ─── Auth Screen ──────────────────────────────────────────────────────────────
function AuthScreen({ onAuth }: { onAuth: () => void }) {
  const [mode, setMode] = useState<"login" | "register">(
    adminStore.isAdminRegistered() ? "login" : "register",
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (mode === "register") {
        if (password.length < 8) {
          setError("A password deve ter pelo menos 8 caracteres.");
          return;
        }
        if (password !== confirm) {
          setError("As passwords não coincidem.");
          return;
        }
        const ok = await adminStore.register(email.trim().toLowerCase(), password);
        if (!ok) {
          setError("Já existe um administrador registado. Faça login.");
          setMode("login");
          return;
        }
        setSession();
        onAuth();
      } else {
        const ok = await adminStore.login(email.trim().toLowerCase(), password);
        if (!ok) {
          setError("Email ou password incorrectos.");
          return;
        }
        setSession();
        onAuth();
      }
    } finally {
      setLoading(false);
    }
  }

  const isRegister = mode === "register";

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.08 0.02 258) 0%, oklch(0.12 0.04 270) 50%, oklch(0.10 0.03 258) 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.55 0.15 78 / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl shadow-2xl"
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
            }}
          >
            <Lock className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            {isRegister ? "Criar conta Admin" : "Acesso Admin"}
          </h1>
          <p className="mt-1.5 text-sm text-white/50">
            {isRegister
              ? "Primeira configuração — este email será o administrador."
              : "Bem-vindo de volta ao painel ByteKwanza."}
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl border border-white/10 p-8 backdrop-blur-xl"
          style={{ background: "oklch(0.13 0.02 258 / 0.85)" }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/60">
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                required
                autoComplete="email"
                placeholder="admin@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] focus:ring-1 focus:ring-[oklch(0.72_0.13_78)/40]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/60">
                Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPw ? "text" : "password"}
                  required
                  autoComplete={isRegister ? "new-password" : "current-password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 pr-11 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] focus:ring-1 focus:ring-[oklch(0.72_0.13_78)/40]"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition"
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Confirm password (register only) */}
            {isRegister && (
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/60">
                  Confirmar Password
                </label>
                <input
                  id="admin-confirm-password"
                  type={showPw ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  placeholder="••••••••"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] focus:ring-1 focus:ring-[oklch(0.72_0.13_78)/40]"
                />
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 flex-none" />
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              id="admin-submit-btn"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
                color: "oklch(0.15 0.02 258)",
              }}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ShieldCheck className="h-4 w-4" />
              )}
              {isRegister ? "Criar Conta e Entrar" : "Entrar no Painel"}
            </button>
          </form>

          {/* Toggle mode */}
          {adminStore.isAdminRegistered() && (
            <p className="mt-5 text-center text-xs text-white/40">
              {mode === "login" ? (
                <>
                  Admin:{" "}
                  <span className="text-white/60">{adminStore.getAdminEmail()}</span>
                </>
              ) : (
                <button
                  onClick={() => setMode("login")}
                  className="text-[oklch(0.78_0.1_78)] hover:underline"
                >
                  Já tenho conta — fazer login
                </button>
              )}
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─── Services Panel ───────────────────────────────────────────────────────────
const ICON_OPTIONS = [
  "Layout", "Globe", "Building2", "ShoppingCart", "Newspaper", "Cog",
  "GraduationCap", "Hotel", "UtensilsCrossed", "Monitor", "Smartphone",
  "Database", "Cloud", "Code2", "Layers", "Boxes",
];

function ServiceCard({
  svc,
  onUpdate,
  onDelete,
}: {
  svc: ServiceItem;
  onUpdate: (updated: ServiceItem) => void;
  onDelete: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [local, setLocal] = useState<ServiceItem>({ ...svc });
  const [featuresStr, setFeaturesStr] = useState(svc.features.join("\n"));

  function save() {
    const updated = {
      ...local,
      features: featuresStr
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean),
    };
    onUpdate(updated);
    setOpen(false);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 overflow-hidden">
      {/* Header row */}
      <div className="flex items-center gap-3 px-5 py-4">
        <GripVertical className="h-4 w-4 text-white/20 flex-none" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white truncate">{svc.name}</p>
          <p className="text-xs text-white/40 mt-0.5 truncate">
            {svc.tag} · {svc.price} AOA
          </p>
        </div>
        {svc.featured && (
          <Star className="h-3.5 w-3.5 text-[oklch(0.72_0.13_78)] fill-[oklch(0.72_0.13_78)] flex-none" />
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-1.5 text-white/50 hover:text-white hover:bg-white/10 transition"
        >
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        <button
          onClick={onDelete}
          className="rounded-lg p-1.5 text-red-400/60 hover:text-red-400 hover:bg-red-400/10 transition"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {/* Expanded editor */}
      {open && (
        <div className="border-t border-white/10 px-5 py-5 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Nome do Serviço"
              value={local.name}
              onChange={(v) => setLocal({ ...local, name: v })}
            />
            <Field
              label="Tag (ex: 1 página)"
              value={local.tag}
              onChange={(v) => setLocal({ ...local, tag: v })}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Preço (AOA)"
              value={local.price}
              onChange={(v) => setLocal({ ...local, price: v })}
            />
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/50">
                Ícone
              </label>
              <select
                value={local.icon}
                onChange={(e) => setLocal({ ...local, icon: e.target.value })}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_78)]"
              >
                {ICON_OPTIONS.map((ic) => (
                  <option key={ic} value={ic} style={{ background: "#1a1f35" }}>
                    {ic}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Field
            label="Descrição"
            value={local.desc}
            onChange={(v) => setLocal({ ...local, desc: v })}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Prazo"
              value={local.deadline}
              onChange={(v) => setLocal({ ...local, deadline: v })}
            />
            <Field
              label="Ideal para"
              value={local.ideal}
              onChange={(v) => setLocal({ ...local, ideal: v })}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/50">
              Funcionalidades (uma por linha)
            </label>
            <textarea
              rows={4}
              value={featuresStr}
              onChange={(e) => setFeaturesStr(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] resize-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-white/70">
              <input
                type="checkbox"
                checked={local.featured}
                onChange={(e) => setLocal({ ...local, featured: e.target.checked })}
                className="rounded accent-[oklch(0.72_0.13_78)]"
              />
              Destacar como Popular
            </label>
          </div>
          <div className="flex gap-2 pt-1">
            <button
              onClick={save}
              className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
                color: "oklch(0.15 0.02 258)",
              }}
            >
              <Save className="h-4 w-4" /> Guardar
            </button>
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white/60 hover:text-white border border-white/15 hover:border-white/30 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ServicesPanel({
  services,
  setServices,
  onSave,
}: {
  services: ServiceItem[];
  setServices: React.Dispatch<React.SetStateAction<ServiceItem[]>>;
  onSave: () => void;
}) {
  function addService() {
    const newSvc: ServiceItem = {
      id: uid(),
      icon: "Globe",
      name: "Novo Serviço",
      tag: "Tipo",
      price: "0 – 0",
      desc: "Descrição do serviço.",
      features: ["Funcionalidade 1"],
      deadline: "X dias úteis",
      ideal: "Para quem…",
      featured: false,
    };
    setServices((prev) => [...prev, newSvc]);
  }

  function updateService(id: string, updated: ServiceItem) {
    setServices((prev) => prev.map((s) => (s.id === id ? updated : s)));
  }

  function deleteService(id: string) {
    setServices((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Os Nossos Serviços</h2>
          <p className="text-xs text-white/40 mt-0.5">{services.length} serviços configurados</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addService}
            className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 transition"
          >
            <Plus className="h-3.5 w-3.5" /> Adicionar
          </button>
          <button
            onClick={onSave}
            className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition"
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
              color: "oklch(0.15 0.02 258)",
            }}
          >
            <Save className="h-3.5 w-3.5" /> Guardar Todos
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {services.map((s) => (
          <ServiceCard
            key={s.id}
            svc={s}
            onUpdate={(updated) => updateService(s.id, updated)}
            onDelete={() => deleteService(s.id)}
          />
        ))}
      </div>

      {services.length === 0 && (
        <div className="rounded-2xl border border-dashed border-white/15 py-12 text-center text-white/40">
          <Briefcase className="mx-auto mb-3 h-8 w-8 opacity-30" />
          <p className="text-sm">Nenhum serviço. Clique em "Adicionar".</p>
        </div>
      )}
    </div>
  );
}

// ─── Portfolio Panel ──────────────────────────────────────────────────────────
function PortfolioCard({
  item,
  onUpdate,
  onDelete,
}: {
  item: PortfolioItem;
  onUpdate: (u: PortfolioItem) => void;
  onDelete: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [local, setLocal] = useState<PortfolioItem>({ ...item });
  const [tagsStr, setTagsStr] = useState(item.tags.join(", "));

  function save() {
    const updated = {
      ...local,
      tags: tagsStr
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };
    onUpdate(updated);
    setOpen(false);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4">
        <GripVertical className="h-4 w-4 text-white/20 flex-none" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white truncate">{item.name}</p>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition truncate"
          >
            {item.display} <ExternalLink className="h-3 w-3 flex-none" />
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-1.5 text-white/50 hover:text-white hover:bg-white/10 transition"
        >
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        <button
          onClick={onDelete}
          className="rounded-lg p-1.5 text-red-400/60 hover:text-red-400 hover:bg-red-400/10 transition"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-5 py-5 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Nome do Projecto"
              value={local.name}
              onChange={(v) => setLocal({ ...local, name: v })}
            />
            <Field
              label="URL (completa)"
              value={local.url}
              onChange={(v) => setLocal({ ...local, url: v })}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Display URL"
              value={local.display}
              onChange={(v) => setLocal({ ...local, display: v })}
            />
            <Field
              label="Screenshot (caminho /img.png ou URL)"
              value={local.screenshot}
              onChange={(v) => setLocal({ ...local, screenshot: v })}
            />
          </div>
          <Field
            label="Descrição"
            value={local.desc}
            onChange={(v) => setLocal({ ...local, desc: v })}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Tags (separadas por vírgulas)"
              value={tagsStr}
              onChange={setTagsStr}
            />
            <Field
              label="Cor de destaque (oklch…)"
              value={local.accent}
              onChange={(v) => setLocal({ ...local, accent: v })}
            />
          </div>
          <div className="flex gap-2 pt-1">
            <button
              onClick={save}
              className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
                color: "oklch(0.15 0.02 258)",
              }}
            >
              <Save className="h-4 w-4" /> Guardar
            </button>
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white/60 hover:text-white border border-white/15 hover:border-white/30 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function PortfolioPanel({
  portfolio,
  setPortfolio,
  onSave,
}: {
  portfolio: PortfolioItem[];
  setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
  onSave: () => void;
}) {
  function addItem() {
    const item: PortfolioItem = {
      id: uid(),
      name: "Novo Projecto",
      url: "https://",
      display: "exemplo.com",
      screenshot: "",
      desc: "Descrição do projecto.",
      tags: ["Web"],
      accent: "oklch(0.65 0.18 220)",
    };
    setPortfolio((prev) => [...prev, item]);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Trabalhos Realizados</h2>
          <p className="text-xs text-white/40 mt-0.5">{portfolio.length} projectos no portfólio</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addItem}
            className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 transition"
          >
            <Plus className="h-3.5 w-3.5" /> Adicionar
          </button>
          <button
            onClick={onSave}
            className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition"
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
              color: "oklch(0.15 0.02 258)",
            }}
          >
            <Save className="h-3.5 w-3.5" /> Guardar Todos
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {portfolio.map((p) => (
          <PortfolioCard
            key={p.id}
            item={p}
            onUpdate={(u) => setPortfolio((prev) => prev.map((x) => (x.id === p.id ? u : x)))}
            onDelete={() => setPortfolio((prev) => prev.filter((x) => x.id !== p.id))}
          />
        ))}
      </div>

      {portfolio.length === 0 && (
        <div className="rounded-2xl border border-dashed border-white/15 py-12 text-center text-white/40">
          <Image className="mx-auto mb-3 h-8 w-8 opacity-30" />
          <p className="text-sm">Nenhum projecto. Clique em "Adicionar".</p>
        </div>
      )}
    </div>
  );
}

// ─── Settings Panel ───────────────────────────────────────────────────────────
function SettingsPanel({
  settings,
  setSettings,
  onSave,
}: {
  settings: SiteSettings;
  setSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
  onSave: () => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-white">Definições Gerais</h2>
        <p className="text-xs text-white/40 mt-0.5">Configurações globais do site</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/3 p-6 space-y-5">
        <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">
          📞 Contactos
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field
            label="WhatsApp (sem +244)"
            value={settings.whatsapp}
            onChange={(v) => setSettings((s) => ({ ...s, whatsapp: v }))}
            placeholder="957455005"
          />
          <Field
            label="Email de Contacto"
            value={settings.email}
            onChange={(v) => setSettings((s) => ({ ...s, email: v }))}
            placeholder="servicos@empresa.com"
          />
        </div>
        <Field
          label="NIF"
          value={settings.nif}
          onChange={(v) => setSettings((s) => ({ ...s, nif: v }))}
          placeholder="5003198294"
        />
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/3 p-6 space-y-5">
        <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">
          🚀 Hero Section
        </h3>
        <Field
          label="Título principal"
          value={settings.heroTitle}
          onChange={(v) => setSettings((s) => ({ ...s, heroTitle: v }))}
        />
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/50">
            Subtítulo / Descrição
          </label>
          <textarea
            rows={3}
            value={settings.heroSubtitle}
            onChange={(e) => setSettings((s) => ({ ...s, heroSubtitle: e.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] resize-none"
          />
        </div>
        <Field
          label="Ano do Catálogo"
          value={settings.catalogYear}
          onChange={(v) => setSettings((s) => ({ ...s, catalogYear: v }))}
          placeholder="2026"
        />
      </div>

      <button
        onClick={onSave}
        id="settings-save-btn"
        className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition"
        style={{
          background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
          color: "oklch(0.15 0.02 258)",
        }}
      >
        <Save className="h-4 w-4" /> Guardar Definições
      </button>
    </div>
  );
}

// ─── Shared Field component ───────────────────────────────────────────────────
function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/50">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] focus:ring-1 focus:ring-[oklch(0.72_0.13_78)/20]"
      />
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>("servicos");
  const [services, setServices] = useState<ServiceItem[]>(adminStore.getServices());
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(adminStore.getPortfolio());
  const [settings, setSettings] = useState<SiteSettings>(adminStore.getSettings());
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const showToast = useCallback(
    (msg: string, type: "success" | "error" = "success") => {
      setToast({ msg, type });
    },
    [],
  );

  function saveServices() {
    adminStore.saveServices(services);
    showToast("✅ Serviços guardados com sucesso!");
  }

  function savePortfolio() {
    adminStore.savePortfolio(portfolio);
    showToast("✅ Portfólio guardado com sucesso!");
  }

  function saveSettings() {
    adminStore.saveSettings(settings);
    showToast("✅ Definições guardadas com sucesso!");
  }

  function handleLogout() {
    clearSession();
    onLogout();
  }

  const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "servicos", label: "Serviços", icon: <Briefcase className="h-4 w-4" /> },
    { id: "portfolio", label: "Portfólio", icon: <Image className="h-4 w-4" /> },
    { id: "definicoes", label: "Definições", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.08 0.02 258) 0%, oklch(0.11 0.03 270) 100%)",
      }}
    >
      {/* Top bar */}
      <header
        className="sticky top-0 z-40 border-b border-white/8 backdrop-blur-xl"
        style={{ background: "oklch(0.10 0.02 258 / 0.9)" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
              }}
            >
              <Lock className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">ByteKwanza Admin</p>
              <p className="text-[10px] text-white/40 leading-tight">
                {adminStore.getAdminEmail()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-white/15 px-3 py-1.5 text-xs text-white/60 hover:text-white hover:border-white/30 transition"
            >
              <Eye className="h-3.5 w-3.5" /> Ver site
            </a>
            <button
              onClick={handleLogout}
              id="admin-logout-btn"
              className="flex items-center gap-1.5 rounded-xl border border-white/15 px-3 py-1.5 text-xs text-white/60 hover:text-red-400 hover:border-red-400/30 transition"
            >
              <LogOut className="h-3.5 w-3.5" /> Sair
            </button>
          </div>
        </div>
      </header>

      {/* Tab nav */}
      <div className="border-b border-white/8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-semibold border-b-2 transition ${
                  tab === t.id
                    ? "border-[oklch(0.72_0.13_78)] text-[oklch(0.78_0.1_78)]"
                    : "border-transparent text-white/50 hover:text-white/80"
                }`}
              >
                {t.icon}
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        {tab === "servicos" && (
          <ServicesPanel
            services={services}
            setServices={setServices}
            onSave={saveServices}
          />
        )}
        {tab === "portfolio" && (
          <PortfolioPanel
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            onSave={savePortfolio}
          />
        )}
        {tab === "definicoes" && (
          <SettingsPanel
            settings={settings}
            setSettings={setSettings}
            onSave={saveSettings}
          />
        )}
      </main>

      {/* Toast */}
      {toast && (
        <Toast
          msg={toast.msg}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(16px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .animation-slide-up { animation: slideUp 0.3s ease; }
      `}</style>
    </div>
  );
}

// ─── Root Page ─────────────────────────────────────────────────────────────────
function AdminPage() {
  const [authed, setAuthed] = useState(getSession());

  if (!authed) {
    return <AuthScreen onAuth={() => setAuthed(true)} />;
  }

  return <Dashboard onLogout={() => setAuthed(false)} />;
}
