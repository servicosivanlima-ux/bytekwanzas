import React, { useState, useEffect } from "react";
import { X, Lock, ShieldCheck, AlertCircle, Loader2, Eye, EyeOff, LogOut, Save, Plus, Trash2, ChevronDown, ChevronUp, Star, GripVertical, Briefcase, Image, ExternalLink } from "lucide-react";
import { adminStore, type ServiceItem, type PortfolioItem, type SiteSettings } from "../lib/admin-store";

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const SESSION_KEY = "bk_admin_session";
function getSession() {
  return typeof sessionStorage !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1";
}
function setSession() {
  sessionStorage.setItem(SESSION_KEY, "1");
}
function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}

type Tab = "servicos" | "portfolio" | "definicoes";

const ICON_OPTIONS = [
  "Layout", "Globe", "Building2", "ShoppingCart", "Newspaper", "Cog",
  "GraduationCap", "Hotel", "UtensilsCrossed", "Monitor", "Smartphone",
  "Database", "Cloud", "Code2", "Layers", "Boxes",
];

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
        className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)]"
      />
    </div>
  );
}

export function AdminModal({
  isOpen,
  onClose,
  onSaveSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSaveSuccess?: () => void;
}) {
  const [authed, setAuthed] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("servicos");
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [settings, setSettings] = useState<SiteSettings>({
    whatsapp: "957455005",
    email: "servicosivanlima@gmail.com",
    nif: "5001712876",
    heroTitle: "Soluções digitais que transformam o seu negócio.",
    heroSubtitle: "Desenvolvimento web, e-commerce, portais e sistemas personalizados.",
    catalogYear: "2026",
  });
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  // Auth form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setAuthed(getSession());
      setServices(adminStore.getServices());
      setPortfolio(adminStore.getPortfolio());
      setSettings(adminStore.getSettings());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    setLoading(true);
    try {
      const ok = await adminStore.login(email.trim().toLowerCase(), password);
      if (!ok) {
        setAuthError("Email ou password incorrectos.");
        return;
      }
      setSession();
      setAuthed(true);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    clearSession();
    setAuthed(false);
    onClose();
  }

  async function handleSaveAll() {
    setLoading(true);
    try {
      await adminStore.saveServices(services);
      await adminStore.savePortfolio(portfolio);
      await adminStore.saveSettings(settings);
      setToast({ msg: "Alterações guardadas com sucesso!", type: "success" });
      setTimeout(() => {
        onSaveSuccess?.();
      }, 500);
    } catch {
      setToast({ msg: "Erro ao guardar no Supabase.", type: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-3xl border border-white/15 bg-[#0e1322] p-6 sm:p-8 text-white shadow-2xl my-auto max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white/60 hover:bg-white/20 hover:text-white transition"
        >
          <X className="h-5 w-5" />
        </button>

        {!authed ? (
          /* Login Form inside modal */
          <div className="max-w-md mx-auto w-full py-8 text-center space-y-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[oklch(0.72_0.13_78)] text-slate-900 shadow-lg">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Painel de Administração</h2>
              <p className="text-xs text-white/50 mt-1">Inicie sessão para gerir serviços e portfólio</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@exemplo.com"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[oklch(0.72_0.13_78)]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 pr-10 text-sm text-white placeholder-white/30 outline-none focus:border-[oklch(0.72_0.13_78)]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  >
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {authError && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
                  <AlertCircle className="h-4 w-4 flex-none" />
                  {authError}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[oklch(0.72_0.13_78)] py-3.5 text-sm font-bold text-slate-950 hover:brightness-105 transition disabled:opacity-50"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
                Entrar no Painel
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard Content */
          <div className="flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5 pr-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.72_0.13_78)] text-slate-900 font-bold">
                  BK
                </div>
                <div>
                  <h2 className="text-lg font-bold">Painel ByteKwanza</h2>
                  <p className="text-xs text-white/40">Gestão de Conteúdo e Preços</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSaveAll}
                  disabled={loading}
                  className="flex items-center gap-2 rounded-xl bg-[oklch(0.72_0.13_78)] px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-105 transition"
                >
                  {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                  Guardar Tudo
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/60 hover:text-white transition"
                >
                  <LogOut className="h-3.5 w-3.5" /> Sair
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-2 border-b border-white/10 py-3">
              {(["servicos", "portfolio", "definicoes"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold capitalize transition ${
                    activeTab === tab
                      ? "bg-white/15 text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {tab === "servicos" ? "Serviços & Preços" : tab === "portfolio" ? "Portfólio" : "Definições"}
                </button>
              ))}
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto py-5 pr-2 space-y-4">
              {activeTab === "servicos" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">{services.length} serviços cadastrados</span>
                    <button
                      onClick={() =>
                        setServices([
                          ...services,
                          {
                            id: uid(),
                            icon: "Globe",
                            name: "Novo Serviço",
                            tag: "Tipo",
                            price: "60.000 – 120.000",
                            annualPrice: "50.000 – 100.000",
                            annualDiscount: "-20% Anual",
                            desc: "Descrição do novo serviço.",
                            features: ["Funcionalidade 1"],
                            deadline: "5 dias",
                            ideal: "Empresas",
                            featured: false,
                          },
                        ])
                      }
                      className="flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
                    >
                      <Plus className="h-3.5 w-3.5" /> Adicionar Serviço
                    </button>
                  </div>

                  {services.map((svc, idx) => (
                    <div key={svc.id} className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={svc.name}
                          onChange={(e) => {
                            const newSvcs = [...services];
                            newSvcs[idx].name = e.target.value;
                            setServices(newSvcs);
                          }}
                          className="font-bold text-sm bg-transparent border-b border-white/20 text-white outline-none focus:border-[oklch(0.72_0.13_78)] px-1 py-0.5"
                        />
                        <button
                          onClick={() => setServices(services.filter((s) => s.id !== svc.id))}
                          className="text-red-400/60 hover:text-red-400 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Field
                          label="Preço Projeto (AOA)"
                          value={svc.price}
                          onChange={(v) => {
                            const newSvcs = [...services];
                            newSvcs[idx].price = v;
                            setServices(newSvcs);
                          }}
                        />
                        <Field
                          label="Preço Anual (AOA)"
                          value={svc.annualPrice || ""}
                          onChange={(v) => {
                            const newSvcs = [...services];
                            newSvcs[idx].annualPrice = v;
                            setServices(newSvcs);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "portfolio" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">{portfolio.length} trabalhos</span>
                    <button
                      onClick={() =>
                        setPortfolio([
                          ...portfolio,
                          {
                            id: uid(),
                            name: "Novo Projeto",
                            url: "https://",
                            display: "exemplo.com",
                            screenshot: "",
                            desc: "Descrição do trabalho.",
                            tags: ["Web"],
                            accent: "oklch(0.65 0.18 220)",
                          },
                        ])
                      }
                      className="flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
                    >
                      <Plus className="h-3.5 w-3.5" /> Adicionar Trabalho
                    </button>
                  </div>

                  {portfolio.map((item, idx) => (
                    <div key={item.id} className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => {
                            const newPort = [...portfolio];
                            newPort[idx].name = e.target.value;
                            setPortfolio(newPort);
                          }}
                          className="font-bold text-sm bg-transparent border-b border-white/20 text-white outline-none focus:border-[oklch(0.72_0.13_78)] px-1 py-0.5"
                        />
                        <button
                          onClick={() => setPortfolio(portfolio.filter((p) => p.id !== item.id))}
                          className="text-red-400/60 hover:text-red-400 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Field
                          label="URL"
                          value={item.url}
                          onChange={(v) => {
                            const newPort = [...portfolio];
                            newPort[idx].url = v;
                            setPortfolio(newPort);
                          }}
                        />
                        <Field
                          label="Display URL"
                          value={item.display}
                          onChange={(v) => {
                            const newPort = [...portfolio];
                            newPort[idx].display = v;
                            setPortfolio(newPort);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "definicoes" && (
                <div className="space-y-4">
                  <Field
                    label="WhatsApp (Sem +244)"
                    value={settings.whatsapp}
                    onChange={(v) => setSettings({ ...settings, whatsapp: v })}
                  />
                  <Field
                    label="Email de Contacto"
                    value={settings.email}
                    onChange={(v) => setSettings({ ...settings, email: v })}
                  />
                  <Field
                    label="NIF"
                    value={settings.nif}
                    onChange={(v) => setSettings({ ...settings, nif: v })}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {toast && (
          <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white shadow-xl">
            <ShieldCheck className="h-4 w-4" />
            {toast.msg}
          </div>
        )}
      </div>
    </div>
  );
}
