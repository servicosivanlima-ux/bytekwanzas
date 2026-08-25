import { r as __toESM } from "../_runtime.mjs";
import { t as adminStore } from "./admin-store-f2U4Abvh.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { B as ChevronUp, C as Lock, E as Image, M as EyeOff, N as ExternalLink, O as GripVertical, S as LogOut, V as ChevronDown, W as Briefcase, f as ShieldCheck, g as Plus, h as Save, j as Eye, n as X, o as Trash2, p as Settings, s as Star, w as LoaderCircle, z as CircleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-KxihzA7i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function uid() {
	return Math.random().toString(36).slice(2, 10);
}
var SESSION_KEY = "bk_admin_session";
function getSession() {
	return sessionStorage.getItem(SESSION_KEY) === "1";
}
function setSession() {
	sessionStorage.setItem(SESSION_KEY, "1");
}
function clearSession() {
	sessionStorage.removeItem(SESSION_KEY);
}
function Toast({ msg, type, onClose }) {
	(0, import_react.useEffect)(() => {
		const t = setTimeout(onClose, 3200);
		return () => clearTimeout(t);
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-2xl px-5 py-3.5 text-sm font-semibold shadow-2xl animation-slide-up ${type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`,
		style: { animation: "slideUp 0.3s ease" },
		children: [
			type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 flex-none" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 flex-none" }),
			msg,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "ml-2 opacity-80 hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
			})
		]
	});
}
function AuthScreen({ onAuth }) {
	const [mode, setMode] = (0, import_react.useState)(adminStore.isAdminRegistered() ? "login" : "register");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	async function handleSubmit(e) {
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
				if (!await adminStore.register(email.trim().toLowerCase(), password)) {
					setError("Já existe um administrador registado. Faça login.");
					setMode("login");
					return;
				}
				setSession();
				onAuth();
			} else {
				if (!await adminStore.login(email.trim().toLowerCase(), password)) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex items-center justify-center px-4",
		style: { background: "linear-gradient(135deg, oklch(0.08 0.02 258) 0%, oklch(0.12 0.04 270) 50%, oklch(0.10 0.03 258) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0",
				style: { background: "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.55 0.15 78 / 0.12) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl shadow-2xl",
							style: { background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-7 w-7 text-white" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold text-white",
							children: isRegister ? "Criar conta Admin" : "Acesso Admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-white/50",
							children: isRegister ? "Primeira configuração — este email será o administrador." : "Bem-vindo de volta ao painel ByteKwanza."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-white/10 p-8 backdrop-blur-xl",
					style: { background: "oklch(0.13 0.02 258 / 0.85)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/60",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "admin-email",
								type: "email",
								required: true,
								autoComplete: "email",
								placeholder: "admin@exemplo.com",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] focus:ring-1 focus:ring-[oklch(0.72_0.13_78)/40]"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/60",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "admin-password",
									type: showPw ? "text" : "password",
									required: true,
									autoComplete: isRegister ? "new-password" : "current-password",
									placeholder: "••••••••",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									className: "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 pr-11 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] focus:ring-1 focus:ring-[oklch(0.72_0.13_78)/40]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowPw((v) => !v),
									className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition",
									children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
								})]
							})] }),
							isRegister && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/60",
								children: "Confirmar Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "admin-confirm-password",
								type: showPw ? "text" : "password",
								required: true,
								autoComplete: "new-password",
								placeholder: "••••••••",
								value: confirm,
								onChange: (e) => setConfirm(e.target.value),
								className: "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] focus:ring-1 focus:ring-[oklch(0.72_0.13_78)/40]"
							})] }),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 flex-none" }), error]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								id: "admin-submit-btn",
								disabled: loading,
								className: "mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition disabled:opacity-60",
								style: {
									background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
									color: "oklch(0.15 0.02 258)"
								},
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), isRegister ? "Criar Conta e Entrar" : "Entrar no Painel"]
							})
						]
					}), adminStore.isAdminRegistered() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-center text-xs text-white/40",
						children: mode === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Admin:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/60",
								children: adminStore.getAdminEmail()
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMode("login"),
							className: "text-[oklch(0.78_0.1_78)] hover:underline",
							children: "Já tenho conta — fazer login"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      ` })
		]
	});
}
var ICON_OPTIONS = [
	"Layout",
	"Globe",
	"Building2",
	"ShoppingCart",
	"Newspaper",
	"Cog",
	"GraduationCap",
	"Hotel",
	"UtensilsCrossed",
	"Monitor",
	"Smartphone",
	"Database",
	"Cloud",
	"Code2",
	"Layers",
	"Boxes"
];
function ServiceCard({ svc, onUpdate, onDelete }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [local, setLocal] = (0, import_react.useState)({ ...svc });
	const [featuresStr, setFeaturesStr] = (0, import_react.useState)(svc.features.join("\n"));
	function save() {
		onUpdate({
			...local,
			features: featuresStr.split("\n").map((f) => f.trim()).filter(Boolean)
		});
		setOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-white/10 bg-white/3 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-4 w-4 text-white/20 flex-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-white truncate",
						children: svc.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-white/40 mt-0.5 truncate",
						children: [
							svc.tag,
							" · ",
							svc.price,
							" AOA"
						]
					})]
				}),
				svc.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 text-[oklch(0.72_0.13_78)] fill-[oklch(0.72_0.13_78)] flex-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((v) => !v),
					className: "rounded-lg p-1.5 text-white/50 hover:text-white hover:bg-white/10 transition",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onDelete,
					className: "rounded-lg p-1.5 text-red-400/60 hover:text-red-400 hover:bg-red-400/10 transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-white/10 px-5 py-5 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nome do Serviço",
						value: local.name,
						onChange: (v) => setLocal({
							...local,
							name: v
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tag (ex: 1 página)",
						value: local.tag,
						onChange: (v) => setLocal({
							...local,
							tag: v
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preço (AOA)",
						value: local.price,
						onChange: (v) => setLocal({
							...local,
							price: v
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-1 block text-xs font-semibold uppercase tracking-wider text-white/50",
						children: "Ícone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: local.icon,
						onChange: (e) => setLocal({
							...local,
							icon: e.target.value
						}),
						className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_78)]",
						children: ICON_OPTIONS.map((ic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: ic,
							style: { background: "#1a1f35" },
							children: ic
						}, ic))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Descrição",
					value: local.desc,
					onChange: (v) => setLocal({
						...local,
						desc: v
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Prazo",
						value: local.deadline,
						onChange: (v) => setLocal({
							...local,
							deadline: v
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Ideal para",
						value: local.ideal,
						onChange: (v) => setLocal({
							...local,
							ideal: v
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1 block text-xs font-semibold uppercase tracking-wider text-white/50",
					children: "Funcionalidades (uma por linha)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 4,
					value: featuresStr,
					onChange: (e) => setFeaturesStr(e.target.value),
					className: "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] resize-none"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 cursor-pointer text-sm text-white/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: local.featured,
							onChange: (e) => setLocal({
								...local,
								featured: e.target.checked
							}),
							className: "rounded accent-[oklch(0.72_0.13_78)]"
						}), "Destacar como Popular"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: save,
						className: "flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition",
						style: {
							background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
							color: "oklch(0.15 0.02 258)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), " Guardar"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						className: "rounded-xl px-5 py-2.5 text-sm font-semibold text-white/60 hover:text-white border border-white/15 hover:border-white/30 transition",
						children: "Cancelar"
					})]
				})
			]
		})]
	});
}
function ServicesPanel({ services, setServices, onSave }) {
	function addService() {
		const newSvc = {
			id: uid(),
			icon: "Globe",
			name: "Novo Serviço",
			tag: "Tipo",
			price: "0 – 0",
			desc: "Descrição do serviço.",
			features: ["Funcionalidade 1"],
			deadline: "X dias úteis",
			ideal: "Para quem…",
			featured: false
		};
		setServices((prev) => [...prev, newSvc]);
	}
	function updateService(id, updated) {
		setServices((prev) => prev.map((s) => s.id === id ? updated : s));
	}
	function deleteService(id) {
		setServices((prev) => prev.filter((s) => s.id !== id));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold text-white",
					children: "Os Nossos Serviços"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-white/40 mt-0.5",
					children: [services.length, " serviços configurados"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: addService,
						className: "flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Adicionar"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onSave,
						className: "flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition",
						style: {
							background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
							color: "oklch(0.15 0.02 258)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3.5 w-3.5" }), " Guardar Todos"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					svc: s,
					onUpdate: (updated) => updateService(s.id, updated),
					onDelete: () => deleteService(s.id)
				}, s.id))
			}),
			services.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-dashed border-white/15 py-12 text-center text-white/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "mx-auto mb-3 h-8 w-8 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "Nenhum serviço. Clique em \"Adicionar\"."
				})]
			})
		]
	});
}
function PortfolioCard({ item, onUpdate, onDelete }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [local, setLocal] = (0, import_react.useState)({ ...item });
	const [tagsStr, setTagsStr] = (0, import_react.useState)(item.tags.join(", "));
	function save() {
		onUpdate({
			...local,
			tags: tagsStr.split(",").map((t) => t.trim()).filter(Boolean)
		});
		setOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-white/10 bg-white/3 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-4 w-4 text-white/20 flex-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-white truncate",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.url,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition truncate",
						children: [
							item.display,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3 flex-none" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((v) => !v),
					className: "rounded-lg p-1.5 text-white/50 hover:text-white hover:bg-white/10 transition",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onDelete,
					className: "rounded-lg p-1.5 text-red-400/60 hover:text-red-400 hover:bg-red-400/10 transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-white/10 px-5 py-5 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nome do Projecto",
						value: local.name,
						onChange: (v) => setLocal({
							...local,
							name: v
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "URL (completa)",
						value: local.url,
						onChange: (v) => setLocal({
							...local,
							url: v
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Display URL",
						value: local.display,
						onChange: (v) => setLocal({
							...local,
							display: v
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Screenshot (caminho /img.png ou URL)",
						value: local.screenshot,
						onChange: (v) => setLocal({
							...local,
							screenshot: v
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Descrição",
					value: local.desc,
					onChange: (v) => setLocal({
						...local,
						desc: v
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tags (separadas por vírgulas)",
						value: tagsStr,
						onChange: setTagsStr
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Cor de destaque (oklch…)",
						value: local.accent,
						onChange: (v) => setLocal({
							...local,
							accent: v
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: save,
						className: "flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition",
						style: {
							background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
							color: "oklch(0.15 0.02 258)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), " Guardar"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						className: "rounded-xl px-5 py-2.5 text-sm font-semibold text-white/60 hover:text-white border border-white/15 hover:border-white/30 transition",
						children: "Cancelar"
					})]
				})
			]
		})]
	});
}
function PortfolioPanel({ portfolio, setPortfolio, onSave }) {
	function addItem() {
		const item = {
			id: uid(),
			name: "Novo Projecto",
			url: "https://",
			display: "exemplo.com",
			screenshot: "",
			desc: "Descrição do projecto.",
			tags: ["Web"],
			accent: "oklch(0.65 0.18 220)"
		};
		setPortfolio((prev) => [...prev, item]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold text-white",
					children: "Trabalhos Realizados"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-white/40 mt-0.5",
					children: [portfolio.length, " projectos no portfólio"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: addItem,
						className: "flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Adicionar"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onSave,
						className: "flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition",
						style: {
							background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
							color: "oklch(0.15 0.02 258)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3.5 w-3.5" }), " Guardar Todos"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: portfolio.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
					item: p,
					onUpdate: (u) => setPortfolio((prev) => prev.map((x) => x.id === p.id ? u : x)),
					onDelete: () => setPortfolio((prev) => prev.filter((x) => x.id !== p.id))
				}, p.id))
			}),
			portfolio.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-dashed border-white/15 py-12 text-center text-white/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "mx-auto mb-3 h-8 w-8 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "Nenhum projecto. Clique em \"Adicionar\"."
				})]
			})
		]
	});
}
function SettingsPanel({ settings, setSettings, onSave }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-bold text-white",
				children: "Definições Gerais"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-white/40 mt-0.5",
				children: "Configurações globais do site"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-white/10 bg-white/3 p-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-white/70 uppercase tracking-wider",
						children: "📞 Contactos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "WhatsApp (sem +244)",
							value: settings.whatsapp,
							onChange: (v) => setSettings((s) => ({
								...s,
								whatsapp: v
							})),
							placeholder: "957455005"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email de Contacto",
							value: settings.email,
							onChange: (v) => setSettings((s) => ({
								...s,
								email: v
							})),
							placeholder: "servicos@empresa.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "NIF",
						value: settings.nif,
						onChange: (v) => setSettings((s) => ({
							...s,
							nif: v
						})),
						placeholder: "5003198294"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-white/10 bg-white/3 p-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-white/70 uppercase tracking-wider",
						children: "🚀 Hero Section"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Título principal",
						value: settings.heroTitle,
						onChange: (v) => setSettings((s) => ({
							...s,
							heroTitle: v
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-1 block text-xs font-semibold uppercase tracking-wider text-white/50",
						children: "Subtítulo / Descrição"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 3,
						value: settings.heroSubtitle,
						onChange: (e) => setSettings((s) => ({
							...s,
							heroSubtitle: e.target.value
						})),
						className: "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] resize-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Ano do Catálogo",
						value: settings.catalogYear,
						onChange: (v) => setSettings((s) => ({
							...s,
							catalogYear: v
						})),
						placeholder: "2026"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onSave,
				id: "settings-save-btn",
				className: "flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition",
				style: {
					background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))",
					color: "oklch(0.15 0.02 258)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), " Guardar Definições"]
			})
		]
	});
}
function Field({ label, value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1 block text-xs font-semibold uppercase tracking-wider text-white/50",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "text",
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder,
		className: "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[oklch(0.72_0.13_78)] focus:ring-1 focus:ring-[oklch(0.72_0.13_78)/20]"
	})] });
}
function Dashboard({ onLogout }) {
	const [tab, setTab] = (0, import_react.useState)("servicos");
	const [services, setServices] = (0, import_react.useState)(adminStore.getServices());
	const [portfolio, setPortfolio] = (0, import_react.useState)(adminStore.getPortfolio());
	const [settings, setSettings] = (0, import_react.useState)(adminStore.getSettings());
	const [toast, setToast] = (0, import_react.useState)(null);
	const showToast = (0, import_react.useCallback)((msg, type = "success") => {
		setToast({
			msg,
			type
		});
	}, []);
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
	const TABS = [
		{
			id: "servicos",
			label: "Serviços",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-4 w-4" })
		},
		{
			id: "portfolio",
			label: "Portfólio",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4" })
		},
		{
			id: "definicoes",
			label: "Definições",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4" })
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		style: { background: "linear-gradient(160deg, oklch(0.08 0.02 258) 0%, oklch(0.11 0.03 270) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-white/8 backdrop-blur-xl",
				style: { background: "oklch(0.10 0.02 258 / 0.9)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-xl",
							style: { background: "linear-gradient(135deg, oklch(0.72 0.13 78), oklch(0.60 0.15 60))" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-white leading-tight",
							children: "ByteKwanza Admin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-white/40 leading-tight",
							children: adminStore.getAdminEmail()
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/",
							target: "_blank",
							rel: "noreferrer",
							className: "hidden sm:flex items-center gap-1.5 rounded-xl border border-white/15 px-3 py-1.5 text-xs text-white/60 hover:text-white hover:border-white/30 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " Ver site"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleLogout,
							id: "admin-logout-btn",
							className: "flex items-center gap-1.5 rounded-xl border border-white/15 px-3 py-1.5 text-xs text-white/60 hover:text-red-400 hover:border-red-400/30 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), " Sair"]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-white/8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							id: `tab-${t.id}`,
							onClick: () => setTab(t.id),
							className: `flex items-center gap-2 px-4 py-4 text-sm font-semibold border-b-2 transition ${tab === t.id ? "border-[oklch(0.72_0.13_78)] text-[oklch(0.78_0.1_78)]" : "border-transparent text-white/50 hover:text-white/80"}`,
							children: [t.icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: t.label
							})]
						}, t.id))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 py-8",
				children: [
					tab === "servicos" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesPanel, {
						services,
						setServices,
						onSave: saveServices
					}),
					tab === "portfolio" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioPanel, {
						portfolio,
						setPortfolio,
						onSave: savePortfolio
					}),
					tab === "definicoes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {
						settings,
						setSettings,
						onSave: saveSettings
					})
				]
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
				msg: toast.msg,
				type: toast.type,
				onClose: () => setToast(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes slideUp {
          from { transform: translateY(16px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .animation-slide-up { animation: slideUp 0.3s ease; }
      ` })
		]
	});
}
function AdminPage() {
	const [authed, setAuthed] = (0, import_react.useState)(getSession());
	if (!authed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScreen, { onAuth: () => setAuthed(true) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, { onLogout: () => setAuthed(false) });
}
//#endregion
export { AdminPage as component };
