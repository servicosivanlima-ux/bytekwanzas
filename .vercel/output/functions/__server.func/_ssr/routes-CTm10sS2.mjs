import { r as __toESM } from "../_runtime.mjs";
import { t as adminStore } from "./admin-store-f2U4Abvh.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Globe, C as Lock, D as Hotel, F as Cog, G as Boxes, H as Check, I as CodeXml, K as ArrowRight, L as Cloud, N as ExternalLink, P as Database, R as Clock, T as Layers, U as Building2, _ as PanelsTopLeft, a as Users, b as MessageCircle, c as Sparkles, d as Shield, i as UtensilsCrossed, k as GraduationCap, l as Smartphone, m as Send, r as Wrench, t as Zap, u as ShoppingCart, v as Newspaper, x as Mail, y as Monitor } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CTm10sS2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ICON_MAP = {
	Layout: PanelsTopLeft,
	Globe,
	Building2,
	ShoppingCart,
	Newspaper,
	Cog,
	GraduationCap,
	Hotel,
	UtensilsCrossed,
	Monitor,
	Smartphone,
	Database,
	Cloud,
	Code2: CodeXml,
	Layers,
	Boxes,
	Shield,
	Lock
};
function resolveIcon(name) {
	return ICON_MAP[name] ?? Globe;
}
var C = {
	kw: "oklch(0.72 0.18 295)",
	tag: "oklch(0.65 0.15 220)",
	str: "oklch(0.72 0.18 148)",
	fn: "oklch(0.85 0.15 90)",
	attr: "oklch(0.75 0.14 185)",
	val: "oklch(0.78 0.18 45)",
	cmt: "oklch(0.45 0.02 258)",
	txt: "oklch(0.88 0.02 258)",
	acc: "oklch(0.72 0.13 78)"
};
var codeSnippets = [
	{
		lang: "TSX",
		file: "Hero.tsx",
		badge: "React",
		badgeColor: C.tag,
		lines: [
			[
				{
					cls: C.kw,
					text: "import"
				},
				{
					cls: C.txt,
					text: " { "
				},
				{
					cls: C.attr,
					text: "useState"
				},
				{
					cls: C.txt,
					text: " } "
				},
				{
					cls: C.kw,
					text: "from"
				},
				{
					cls: C.str,
					text: " 'react'"
				},
				{
					cls: C.txt,
					text: ";"
				}
			],
			[],
			[{
				cls: C.cmt,
				text: "// ByteKwanza — Hero Section"
			}],
			[
				{
					cls: C.kw,
					text: "export function"
				},
				{
					cls: C.txt,
					text: " "
				},
				{
					cls: C.fn,
					text: "Hero"
				},
				{
					cls: C.txt,
					text: "() {"
				}
			],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.kw,
					text: "return"
				},
				{
					cls: C.txt,
					text: " ("
				}
			],
			[
				{
					cls: C.txt,
					text: "    "
				},
				{
					cls: C.tag,
					text: "<section"
				},
				{
					cls: C.txt,
					text: " "
				},
				{
					cls: C.attr,
					text: "className"
				},
				{
					cls: C.txt,
					text: "="
				},
				{
					cls: C.str,
					text: "\"hero-gradient\""
				},
				{
					cls: C.tag,
					text: ">"
				}
			],
			[
				{
					cls: C.txt,
					text: "      "
				},
				{
					cls: C.tag,
					text: "<h1"
				},
				{
					cls: C.txt,
					text: " "
				},
				{
					cls: C.attr,
					text: "className"
				},
				{
					cls: C.txt,
					text: "="
				},
				{
					cls: C.str,
					text: "\"title\""
				},
				{
					cls: C.tag,
					text: ">"
				}
			],
			[{
				cls: C.txt,
				text: "        Soluções Digitais 🇦🇴"
			}],
			[{
				cls: C.txt,
				text: "      "
			}, {
				cls: C.tag,
				text: "</h1>"
			}],
			[
				{
					cls: C.txt,
					text: "      "
				},
				{
					cls: C.tag,
					text: "<button"
				},
				{
					cls: C.txt,
					text: " "
				},
				{
					cls: C.attr,
					text: "onClick"
				},
				{
					cls: C.txt,
					text: "={"
				},
				{
					cls: C.fn,
					text: "handleCTA"
				},
				{
					cls: C.txt,
					text: "}"
				}
			],
			[
				{
					cls: C.txt,
					text: "        className="
				},
				{
					cls: C.str,
					text: "\"cta-btn\""
				},
				{
					cls: C.tag,
					text: ">"
				}
			],
			[{
				cls: C.txt,
				text: "        Orçamento Gratuito ✨"
			}],
			[{
				cls: C.txt,
				text: "      "
			}, {
				cls: C.tag,
				text: "</button>"
			}],
			[{
				cls: C.txt,
				text: "    "
			}, {
				cls: C.tag,
				text: "</section>"
			}],
			[{
				cls: C.txt,
				text: "  );"
			}],
			[{
				cls: C.txt,
				text: "}"
			}]
		]
	},
	{
		lang: "CSS",
		file: "styles.css",
		badge: "Design",
		badgeColor: C.str,
		lines: [
			[{
				cls: C.cmt,
				text: "/* ByteKwanza — Design System */"
			}],
			[],
			[{
				cls: C.fn,
				text: ".hero-gradient"
			}, {
				cls: C.txt,
				text: " {"
			}],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.attr,
					text: "background"
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.fn,
					text: "linear-gradient"
				},
				{
					cls: C.txt,
					text: "("
				}
			],
			[
				{
					cls: C.txt,
					text: "    "
				},
				{
					cls: C.val,
					text: "135deg"
				},
				{
					cls: C.txt,
					text: ", "
				},
				{
					cls: C.str,
					text: "#0a0e1a"
				},
				{
					cls: C.txt,
					text: ", "
				},
				{
					cls: C.str,
					text: "#1a2040"
				}
			],
			[{
				cls: C.txt,
				text: "  );"
			}],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.attr,
					text: "display"
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "grid"
				},
				{
					cls: C.txt,
					text: ";"
				}
			],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.attr,
					text: "place-items"
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "center"
				},
				{
					cls: C.txt,
					text: ";"
				}
			],
			[{
				cls: C.txt,
				text: "}"
			}],
			[],
			[{
				cls: C.fn,
				text: ".cta-btn"
			}, {
				cls: C.txt,
				text: " {"
			}],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.attr,
					text: "background"
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.str,
					text: "oklch(0.72 0.13 78)"
				},
				{
					cls: C.txt,
					text: ";"
				}
			],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.attr,
					text: "border-radius"
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "9999px"
				},
				{
					cls: C.txt,
					text: ";"
				}
			],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.attr,
					text: "font-weight"
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "700"
				},
				{
					cls: C.txt,
					text: ";"
				}
			],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.attr,
					text: "transition"
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "all 0.2s ease"
				},
				{
					cls: C.txt,
					text: ";"
				}
			],
			[{
				cls: C.txt,
				text: "}"
			}]
		]
	},
	{
		lang: "JSON",
		file: "package.json",
		badge: "Config",
		badgeColor: C.val,
		lines: [
			[{
				cls: C.txt,
				text: "{"
			}],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.str,
					text: "\"name\""
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "\"bytekwanza-ao\""
				},
				{
					cls: C.txt,
					text: ","
				}
			],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.str,
					text: "\"version\""
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "\"2.0.0\""
				},
				{
					cls: C.txt,
					text: ","
				}
			],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.str,
					text: "\"author\""
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "\"ByteKwanza 🇦🇴\""
				},
				{
					cls: C.txt,
					text: ","
				}
			],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.str,
					text: "\"license\""
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "\"MIT\""
				},
				{
					cls: C.txt,
					text: ","
				}
			],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.str,
					text: "\"scripts\""
				},
				{
					cls: C.txt,
					text: ": {"
				}
			],
			[
				{
					cls: C.txt,
					text: "    "
				},
				{
					cls: C.str,
					text: "\"dev\""
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "\"vite\""
				},
				{
					cls: C.txt,
					text: ","
				}
			],
			[
				{
					cls: C.txt,
					text: "    "
				},
				{
					cls: C.str,
					text: "\"build\""
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "\"vite build\""
				},
				{
					cls: C.txt,
					text: ","
				}
			],
			[
				{
					cls: C.txt,
					text: "    "
				},
				{
					cls: C.str,
					text: "\"deploy\""
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "\"gh-pages -d dist\""
				}
			],
			[{
				cls: C.txt,
				text: "  },"
			}],
			[
				{
					cls: C.txt,
					text: "  "
				},
				{
					cls: C.str,
					text: "\"dependencies\""
				},
				{
					cls: C.txt,
					text: ": {"
				}
			],
			[
				{
					cls: C.txt,
					text: "    "
				},
				{
					cls: C.str,
					text: "\"react\""
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "\"^18.3.0\""
				},
				{
					cls: C.txt,
					text: ","
				}
			],
			[
				{
					cls: C.txt,
					text: "    "
				},
				{
					cls: C.str,
					text: "\"typescript\""
				},
				{
					cls: C.txt,
					text: ": "
				},
				{
					cls: C.val,
					text: "\"^5.5.0\""
				}
			],
			[{
				cls: C.txt,
				text: "  }"
			}],
			[{
				cls: C.txt,
				text: "}"
			}]
		]
	}
];
function ContactForm({ selectedService, whatsapp, serviceNames }) {
	const [formData, setFormData] = (0, import_react.useState)({
		nome: "",
		empresa: "",
		servico: selectedService || serviceNames[0] || "Landing Page",
		mensagem: ""
	});
	(0, import_react.useEffect)(() => {
		if (selectedService) setFormData((prev) => ({
			...prev,
			servico: selectedService
		}));
	}, [selectedService]);
	const handleSubmit = (e) => {
		e.preventDefault();
		const text = `*Nova solicitação de orçamento via site ByteKwanza!* 🚀\n\n*Nome:* ${formData.nome}\n` + (formData.empresa ? `*Empresa:* ${formData.empresa}\n` : "") + `*Serviço de interesse:* ${formData.servico}\n\n*Mensagem:* ${formData.mensagem || "Sem mensagem adicional."}`;
		const url = `https://wa.me/244${whatsapp}?text=${encodeURIComponent(text)}`;
		window.open(url, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5",
				children: "Seu Nome *"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				required: true,
				placeholder: "Ex: Manuel dos Santos",
				value: formData.nome,
				onChange: (e) => setFormData({
					...formData,
					nome: e.target.value
				}),
				className: "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-[oklch(0.72_0.13_78)] focus:outline-none transition"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5",
					children: "Empresa / Projeto (Opcional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					placeholder: "Ex: Minha Empresa LDA",
					value: formData.empresa,
					onChange: (e) => setFormData({
						...formData,
						empresa: e.target.value
					}),
					className: "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-[oklch(0.72_0.13_78)] focus:outline-none transition"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5",
					children: "Serviço Pretendido"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: formData.servico,
					onChange: (e) => setFormData({
						...formData,
						servico: e.target.value
					}),
					className: "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white focus:border-[oklch(0.72_0.13_78)] focus:outline-none transition [&>option]:bg-slate-900 [&>option]:text-white",
					children: [serviceNames.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: name,
						children: name
					}, name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "Outro / Consultoria",
						children: "Outro / Consultoria"
					})]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5",
				children: "Detalhes da sua Ideia ou Projeto"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 3,
				placeholder: "Descreva brevemente o que precisa...",
				value: formData.mensagem,
				onChange: (e) => setFormData({
					...formData,
					mensagem: e.target.value
				}),
				className: "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-[oklch(0.72_0.13_78)] focus:outline-none transition resize-none"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[oklch(0.72_0.13_78)] px-6 py-3.5 text-sm font-bold text-[oklch(0.2_0.04_258)] shadow-gold hover:brightness-105 active:scale-[0.99] transition cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Enviar Mensagem no WhatsApp"]
			})
		]
	});
}
function CodeTerminal() {
	const [sIdx, setSIdx] = (0, import_react.useState)(0);
	const [lineIdx, setLineIdx] = (0, import_react.useState)(0);
	const [charIdx, setCharIdx] = (0, import_react.useState)(0);
	const [phase, setPhase] = (0, import_react.useState)("typing");
	const [opacity, setOpacity] = (0, import_react.useState)(1);
	const [blink, setBlink] = (0, import_react.useState)(true);
	const snippet = codeSnippets[sIdx];
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setBlink((b) => !b), 530);
		return () => clearInterval(t);
	}, []);
	(0, import_react.useEffect)(() => {
		if (phase === "pause") {
			const t = setTimeout(() => setPhase("fading"), 2200);
			return () => clearTimeout(t);
		}
		if (phase === "fading") {
			setOpacity(0);
			const t = setTimeout(() => {
				setSIdx((p) => (p + 1) % codeSnippets.length);
				setLineIdx(0);
				setCharIdx(0);
				setOpacity(1);
				setPhase("typing");
			}, 600);
			return () => clearTimeout(t);
		}
		const currentLine = snippet.lines[lineIdx];
		if (!currentLine) {
			const t = setTimeout(() => {
				if (lineIdx + 1 >= snippet.lines.length) setPhase("pause");
				else {
					setLineIdx((l) => l + 1);
					setCharIdx(0);
				}
			}, 55);
			return () => clearTimeout(t);
		}
		const lineText = currentLine.map((tk) => tk.text).join("");
		if (charIdx >= lineText.length) {
			const t = setTimeout(() => {
				if (lineIdx + 1 >= snippet.lines.length) setPhase("pause");
				else {
					setLineIdx((l) => l + 1);
					setCharIdx(0);
				}
			}, 60);
			return () => clearTimeout(t);
		}
		const speed = lineText[charIdx] === " " ? 18 : Math.random() < .08 ? 90 : 28;
		const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
		return () => clearTimeout(t);
	}, [
		phase,
		lineIdx,
		charIdx,
		snippet,
		sIdx
	]);
	const renderFull = (line, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				color: C.cmt,
				minWidth: "2rem",
				textAlign: "right",
				paddingRight: "1rem",
				userSelect: "none",
				opacity: .35
			},
			children: li + 1
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.map((tk, ti) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { color: tk.cls },
			children: tk.text
		}, ti)) })]
	}, li);
	const renderPartial = (line, li, chars) => {
		let remaining = chars;
		const spans = [];
		for (let ti = 0; ti < line.length; ti++) {
			if (remaining <= 0) break;
			const t = line[ti];
			const visible = t.text.slice(0, remaining);
			remaining -= t.text.length;
			spans.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: { color: t.cls },
				children: visible
			}, ti));
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					color: C.cmt,
					minWidth: "2rem",
					textAlign: "right",
					paddingRight: "1rem",
					userSelect: "none",
					opacity: .35
				},
				children: li + 1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [spans, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
				display: "inline-block",
				width: "2px",
				height: "1em",
				background: C.acc,
				verticalAlign: "text-bottom",
				opacity: blink ? 1 : 0,
				transition: "opacity 0.1s"
			} })] })]
		}, li);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -m-10 rounded-[3rem] blur-3xl pointer-events-none",
				style: {
					background: `radial-gradient(ellipse at 60% 40%, ${snippet.badgeColor}25 0%, transparent 65%)`,
					transition: "background 0.6s"
				}
			}),
			[
				{
					text: "🇦🇴 Made in Angola",
					pos: "-top-3 right-2 sm:-top-5 sm:right-4",
					delay: "0s"
				},
				{
					text: "✓ Entregue a tempo",
					pos: "-bottom-3 left-2 sm:-bottom-5 sm:left-4",
					delay: "0.5s"
				},
				{
					text: "⚡ Alta performance",
					pos: "top-2 left-2 sm:-left-5 sm:top-1/3",
					delay: "1s"
				}
			].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute ${b.pos} z-20 hidden sm:block rounded-full border border-white/20 bg-white/8 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-white/80 shadow-lg whitespace-nowrap`,
				style: {
					animation: "tkBadge 3.2s ease-in-out infinite",
					animationDelay: b.delay
				},
				children: b.text
			}, b.text)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)]",
				style: {
					background: "oklch(0.11 0.02 258)",
					transition: "opacity 0.55s",
					opacity
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 border-b border-white/8 overflow-x-auto",
						style: { background: "oklch(0.14 0.02 258)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1.5 flex-none",
								children: [
									"#f87171",
									"#fbbf24",
									"#4ade80"
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full",
									style: {
										background: c,
										opacity: .75
									}
								}, c))
							}),
							codeSnippets.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-mono transition-all duration-300 flex-none",
								style: {
									background: i === sIdx ? "oklch(0.18 0.03 258)" : "transparent",
									color: i === sIdx ? C.txt : C.cmt,
									borderBottom: i === sIdx ? `1px solid ${s.badgeColor}` : "1px solid transparent"
								},
								children: s.file
							}, s.file)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ml-auto rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-bold flex-none",
								style: {
									background: `${snippet.badgeColor}25`,
									color: snippet.badgeColor,
									border: `1px solid ${snippet.badgeColor}40`
								},
								children: snippet.badge
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-3 sm:p-4 font-mono text-[11px] sm:text-[12px] leading-[1.75] overflow-x-auto",
						style: { minHeight: "260px" },
						children: snippet.lines.map((line, li) => {
							if (li < lineIdx) return renderFull(line, li);
							if (li === lineIdx) return renderPartial(line, li, charIdx);
							return null;
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 px-4 py-1.5 border-t border-white/8 text-[10px] font-mono",
						style: {
							background: snippet.badgeColor,
							color: "oklch(0.1 0.02 258)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: snippet.lang
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-70",
								children: "UTF-8"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "opacity-70",
								children: [
									"Ln ",
									lineIdx + 1,
									", Col ",
									charIdx + 1
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto font-bold",
								children: "ByteKwanza © 2026"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes tkBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      ` })
		]
	});
}
var addons = [
	{
		name: "Registo de Domínio",
		price: "Conforme fornecedor"
	},
	{
		name: "Hospedagem Web (anual)",
		price: "80.000 – 250.000"
	},
	{
		name: "Manutenção Mensal",
		price: "30.000 – 150.000"
	},
	{
		name: "SEO Básico",
		price: "80.000 – 250.000"
	},
	{
		name: "Criação de Logótipo",
		price: "80.000 – 300.000"
	}
];
var reasons = [
	{
		icon: Sparkles,
		title: "Preços competitivos",
		desc: "Qualidade a preços justos para o mercado angolano."
	},
	{
		icon: Users,
		title: "Equipa dedicada",
		desc: "Profissionais focados no sucesso do seu projecto."
	},
	{
		icon: Zap,
		title: "Tecnologia actualizada",
		desc: "Stacks modernas, seguras e de alta performance."
	},
	{
		icon: Wrench,
		title: "Suporte pós-lançamento",
		desc: "Acompanhamento contínuo e manutenção."
	},
	{
		icon: Clock,
		title: "Prazos cumpridos",
		desc: "Compromisso rigoroso com as datas acordadas."
	},
	{
		icon: Shield,
		title: "Soluções à medida",
		desc: "Cada projecto personalizado ao seu negócio."
	}
];
function Landing() {
	const [services, setServices] = (0, import_react.useState)(() => adminStore.getServices());
	const [portfolio, setPortfolio] = (0, import_react.useState)(() => adminStore.getPortfolio());
	const [settings, setSettings] = (0, import_react.useState)(() => adminStore.getSettings());
	const [selectedService, setSelectedService] = (0, import_react.useState)(() => adminStore.getServices()[0]?.name ?? "Landing Page");
	(0, import_react.useEffect)(() => {
		function onFocus() {
			setServices(adminStore.getServices());
			setPortfolio(adminStore.getPortfolio());
			setSettings(adminStore.getSettings());
		}
		window.addEventListener("focus", onFocus);
		return () => window.removeEventListener("focus", onFocus);
	}, []);
	const whatsapp = settings.whatsapp;
	const email = settings.email;
	const whatsappUrl = `https://wa.me/244${whatsapp}?text=${encodeURIComponent("Olá ByteKwanza! Gostaria de um orçamento.")}`;
	const serviceNames = services.map((s) => s.name);
	const handleSelectService = (serviceName) => {
		if (serviceName) setSelectedService(serviceName);
		const element = document.getElementById("contacto");
		if (element) element.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.png",
								alt: "ByteKwanza",
								className: "h-9 w-9 object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display font-bold text-lg tracking-tight",
								children: ["Byte", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[oklch(0.6_0.15_78)]",
									children: "Kwanza"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#servicos",
									className: "hover:text-foreground transition-colors",
									children: "Serviços"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#extras",
									className: "hover:text-foreground transition-colors",
									children: "Extras"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#portfolio",
									className: "hover:text-foreground transition-colors",
									children: "Portfólio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#porque",
									className: "hover:text-foreground transition-colors",
									children: "Porquê nós"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contacto",
									className: "hover:text-foreground transition-colors",
									children: "Contacto"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleSelectService(),
							className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-brand hover:opacity-95 transition cursor-pointer",
							children: ["Orçamento", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "top",
				className: "relative overflow-hidden bg-gradient-hero text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-28 md:pt-28 md:pb-36 grid md:grid-cols-2 gap-8 md:gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.13_78)]" }), "Catálogo de Serviços 2026"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 sm:mt-5 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight",
							children: [
								"Soluções digitais que ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "transformam"
								}),
								" o seu negócio."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/70 max-w-xl",
							children: "Desenvolvimento web, e-commerce, portais e sistemas personalizados. Uma equipa angolana com conhecimento local e tecnologia de ponta."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.72_0.13_78)] px-6 py-3 text-sm font-semibold text-[oklch(0.2_0.04_258)] shadow-gold hover:brightness-105 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Falar no WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#servicos",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition",
								children: "Ver serviços"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-md",
							children: [
								{
									k: "6+",
									v: "Serviços"
								},
								{
									k: "100%",
									v: "Sob medida"
								},
								{
									k: "AO",
									v: "Made in Angola"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-xl border border-white/10 sm:border-none text-center sm:text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xl sm:text-2xl font-display font-bold text-[oklch(0.85_0.1_78)]",
									children: s.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-[10px] sm:text-xs uppercase tracking-wider text-white/60 mt-0.5 sm:mt-1",
									children: s.v
								})]
							}, s.v))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeTerminal, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "servicos",
				className: "mx-auto max-w-7xl px-4 sm:px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest text-[oklch(0.55_0.15_258)]",
							children: "Os nossos serviços"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl md:text-5xl font-bold",
							children: "Da ideia ao lançamento — cuidamos de tudo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Escolha o plano que melhor se adapta ao seu projecto. Todos os preços em Kwanzas (AOA) e são indicativos."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: services.map((s) => {
						const Icon = resolveIcon(s.icon);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `group relative flex flex-col rounded-2xl border p-5 sm:p-7 transition hover:-translate-y-1 hover:shadow-brand ${s.featured ? "border-[oklch(0.72_0.13_78)]/50 bg-gradient-to-br from-white to-[oklch(0.72_0.13_78)]/5" : "border-border bg-card"}`,
							children: [
								s.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-3 right-4 sm:right-6 rounded-full bg-[oklch(0.72_0.13_78)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[oklch(0.2_0.04_258)]",
									children: "Popular"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
										children: s.tag
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 sm:mt-5 text-lg sm:text-xl font-bold",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs sm:text-sm text-muted-foreground",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 border-t border-border pt-4 sm:pt-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-baseline gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-xl sm:text-2xl font-bold break-words",
											children: s.price
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-muted-foreground",
											children: "AOA"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2 text-sm",
									children: s.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 flex-none text-[oklch(0.6_0.15_78)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground/80",
											children: f
										})]
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 space-y-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-2 text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
											" ",
											s.deadline
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground/80",
											children: "Ideal para: "
										}), s.ideal]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => handleSelectService(s.name),
									className: "mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition cursor-pointer",
									children: ["Solicitar orçamento", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						}, s.name);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "extras",
				className: "bg-secondary/50 border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-12 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-[oklch(0.55_0.15_258)]",
								children: "Serviços adicionais"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl md:text-4xl font-bold",
								children: "Complemente a sua presença digital."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground max-w-md",
								children: "Serviços essenciais para manter a sua plataforma no ar, encontrável e alinhada à sua marca."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden",
							children: addons.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: a.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground font-mono",
									children: a.price
								})]
							}, a.name))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "portfolio",
				className: "mx-auto max-w-7xl px-4 sm:px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest text-[oklch(0.55_0.15_258)]",
							children: "Trabalhos realizados"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl md:text-5xl font-bold",
							children: "Sites que já lançámos."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Projectos reais desenvolvidos pela ByteKwanza — clique para visitar."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 md:grid-cols-2",
					children: portfolio.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: p.url,
						target: "_blank",
						rel: "noreferrer",
						className: "group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-brand transition-all duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden bg-muted",
							style: { aspectRatio: "16/9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.screenshot,
									alt: `Pré-visualização de ${p.name}`,
									className: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105",
									loading: "lazy",
									onError: (e) => {
										e.currentTarget.style.display = "none";
										e.currentTarget.parentElement.style.background = `linear-gradient(135deg, ${p.accent}22 0%, oklch(0.15 0.02 258) 100%)`;
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-900",
										children: ["Visitar site ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-0 left-0 right-0 h-1",
									style: { background: p.accent }
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 flex flex-col gap-3 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground font-mono mt-0.5",
										children: p.display
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 text-muted-foreground flex-none mt-1 group-hover:text-foreground transition-colors" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 mt-auto pt-2",
									children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
										children: t
									}, t))
								})
							]
						})]
					}, p.url))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "porque",
				className: "mx-auto max-w-7xl px-4 sm:px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-widest text-[oklch(0.55_0.15_258)]",
						children: "Porquê a ByteKwanza"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-5xl font-bold",
						children: "Parceiros do seu sucesso digital."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: reasons.map((r, i) => {
						const Icon = r.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-7 hover:border-[oklch(0.72_0.13_78)]/50 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-3xl font-bold text-[oklch(0.72_0.13_78)]/70",
										children: ["0", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-bold",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: r.desc
								})
							]
						}, r.title);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contacto",
				className: "relative overflow-hidden bg-gradient-hero text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-[oklch(0.85_0.1_78)]",
								children: "Contacte-nos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl md:text-5xl font-bold leading-tight",
								children: "Vamos transformar a sua ideia numa realidade digital."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-white/70 max-w-lg",
								children: "Peça já o seu orçamento gratuito. A nossa equipa está pronta para analisar o seu projecto e propor a melhor solução tecnológica."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-full bg-[oklch(0.72_0.13_78)] px-6 py-3 text-sm font-semibold text-[oklch(0.2_0.04_258)] shadow-gold hover:brightness-105 transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${email}`,
									className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "Enviar email"]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-8 md:p-10 shadow-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-xl font-bold mb-6 flex items-center gap-2 text-[oklch(0.85_0.1_78)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" }), " Enviar Mensagem Directa"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {
									selectedService,
									whatsapp,
									serviceNames
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-9 w-9 flex-none place-items-center rounded-lg bg-[oklch(0.72_0.13_78)] text-[oklch(0.2_0.04_258)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-widest text-white/50",
											children: "WhatsApp Directo"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: whatsappUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "text-sm font-semibold hover:text-[oklch(0.85_0.1_78)]",
											children: ["+244 ", whatsapp]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-9 w-9 flex-none place-items-center rounded-xl bg-white/10 text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] uppercase tracking-widest text-white/50",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `mailto:${email}`,
												className: "text-sm font-semibold truncate block hover:text-[oklch(0.85_0.1_78)]",
												children: email
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-[11px] text-white/50",
									children: "Ao clicar em enviar, será redirecionado para o WhatsApp com os seus dados pré-preenchidos."
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.png",
								alt: "",
								className: "h-7 w-7 object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-bold",
								children: "ByteKwanza"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" ByteKwanza — Soluções digitais feitas em Angola."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground/60",
								children: ["NIF: ", settings.nif]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/admin",
								className: "text-xs text-muted-foreground/30 hover:text-muted-foreground/60 transition",
								children: "Admin"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Landing as component };
