//#region node_modules/.nitro/vite/services/ssr/assets/admin-store-CfaAvsUO.js
var STORAGE_KEY = "bytekwanza_admin_store";
var DEFAULT_SETTINGS = {
	whatsapp: "957455005",
	email: "servicos.ivanlima@gmail.com",
	nif: "5003198294",
	heroTitle: "Soluções digitais que transformam o seu negócio.",
	heroSubtitle: "Desenvolvimento web, e-commerce, portais e sistemas personalizados. Uma equipa angolana com conhecimento local e tecnologia de ponta.",
	catalogYear: "2026"
};
var DEFAULT_SERVICES = [
	{
		id: "landing-page",
		icon: "Layout",
		name: "Landing Page",
		tag: "1 página",
		price: "60.000 – 120.000",
		annualPrice: "50.000 – 95.000",
		annualDiscount: "-20% Anual",
		desc: "Página única de alto impacto para captar leads e converter visitantes.",
		features: [
			"Design responsivo e moderno",
			"Formulário de captura de contactos",
			"Optimização mobile e tablet",
			"Integração com redes sociais",
			"Inclui hospedagem + domínio .ao (no plano anual)"
		],
		deadline: "5 a 10 dias úteis",
		ideal: "Campanhas, lançamentos de produtos e eventos.",
		featured: false
	},
	{
		id: "site-institucional",
		icon: "Globe",
		name: "Site Institucional",
		tag: "até 5 páginas",
		price: "250.000 – 450.000",
		annualPrice: "200.000 – 360.000",
		annualDiscount: "-20% Anual",
		desc: "Presença profissional online sólida e credível.",
		features: [
			"Até 5 páginas personalizadas",
			"Design profissional e responsivo",
			"Painel de gestão de conteúdo",
			"Formulários integrados",
			"Inclui manutenção + SSL + backup (no plano anual)"
		],
		deadline: "10 a 20 dias úteis",
		ideal: "PMEs, consultores, profissionais liberais e ONGs.",
		featured: false
	},
	{
		id: "site-empresarial",
		icon: "Building2",
		name: "Site Empresarial",
		tag: "6 a 10 páginas",
		price: "450.000 – 800.000",
		annualPrice: "370.000 – 650.000",
		annualDiscount: "-18% Anual",
		desc: "Plataforma completa para empresas em crescimento.",
		features: [
			"Até 10 páginas com conteúdo à medida",
			"Blog integrado",
			"Área de clientes / membros",
			"Galeria de portefólio",
			"Suporte técnico prioritário (no plano anual)"
		],
		deadline: "15 a 30 dias úteis",
		ideal: "Escritórios de advocacia, clínicas e consultorias.",
		featured: false
	},
	{
		id: "loja-online",
		icon: "ShoppingCart",
		name: "Loja Online",
		tag: "E-commerce",
		price: "900.000 – 2.000.000+",
		annualPrice: "750.000 – 1.650.000+",
		annualDiscount: "-15% Anual",
		desc: "Venda 24/7 com gestão completa e pagamentos integrados.",
		features: [
			"Catálogo completo de produtos",
			"Carrinho e sistema de encomendas",
			"Multicaixa Express e transferências",
			"Gestão de stock e painel admin",
			"Manutenção e monitorização 24/7 (no plano anual)"
		],
		deadline: "20 a 45 dias úteis",
		ideal: "Lojas físicas, marcas, artesãos e empreendedores.",
		featured: true
	},
	{
		id: "portal-noticias",
		icon: "Newspaper",
		name: "Portal de Notícias",
		tag: "Editorial",
		price: "1.200.000 – 3.000.000+",
		annualPrice: "1.000.000 – 2.450.000+",
		annualDiscount: "-18% Anual",
		desc: "Plataforma editorial robusta preparada para tráfego elevado.",
		features: [
			"Publicação e gestão editorial",
			"Categorias, tags e comentários",
			"Painel multi-editor com permissões",
			"Optimização para escala",
			"Servidor dedicado e suporte editorial (no plano anual)"
		],
		deadline: "30 a 60 dias úteis",
		ideal: "Media, associações e portais temáticos.",
		featured: false
	},
	{
		id: "sistema-web",
		icon: "Cog",
		name: "Sistema Web Personalizado",
		tag: "Sob medida",
		price: "A partir de 2.500.000",
		annualPrice: "A partir de 2.100.000",
		annualDiscount: "-15% Licença/Ano",
		desc: "Solução à medida para automatizar processos do seu negócio.",
		features: [
			"Análise de requisitos e arquitectura",
			"Funcionalidades sob medida",
			"Base de dados segura e optimizada",
			"Documentação técnica completa",
			"SLA de suporte contínuo (no plano anual)"
		],
		deadline: "45 a 90+ dias úteis",
		ideal: "Gestão interna, plataformas B2B e automação.",
		featured: false
	},
	{
		id: "sistema-escolar",
		icon: "GraduationCap",
		name: "Sistema Escolar",
		tag: "Educação",
		price: "1.500.000 – 4.000.000+",
		annualPrice: "1.250.000 – 3.300.000+",
		annualDiscount: "-17% Anual",
		desc: "Plataforma completa de gestão escolar: matrículas, notas, turmas e comunicação com encarregados.",
		features: [
			"Matrículas e gestão de alunos",
			"Lançamento de notas e pautas",
			"Controlo de presenças e faltas",
			"Portal do encarregado de educação",
			"Emissão de declarações e boletins",
			"Gestão de turmas e horários",
			"Formação de utilizadores e suporte anual incluído"
		],
		deadline: "45 a 90 dias úteis",
		ideal: "Escolas primárias, colégios privados e institutos.",
		featured: false
	},
	{
		id: "sistema-hospedaria",
		icon: "Hotel",
		name: "Sistema de Hospedaria",
		tag: "Hotelaria",
		price: "1.800.000 – 5.000.000+",
		annualPrice: "1.500.000 – 4.100.000+",
		annualDiscount: "-18% Anual",
		desc: "Gestão completa de reservas, check-in/out, quartos e facturação para hotéis e residenciais.",
		features: [
			"Reservas online e gestão de quartos",
			"Check-in / check-out digital",
			"Controlo de ocupação em tempo real",
			"Facturação e relatórios financeiros",
			"Gestão de funcionários e turnos",
			"Integração com canais de reserva",
			"Manutenção preventiva de sistema e licença anual"
		],
		deadline: "45 a 90 dias úteis",
		ideal: "Hotéis, residenciais, pensões e apart-hotéis.",
		featured: false
	},
	{
		id: "sistema-restaurante",
		icon: "UtensilsCrossed",
		name: "Sistema de Restaurante",
		tag: "F&B",
		price: "800.000 – 2.500.000+",
		annualPrice: "680.000 – 2.050.000+",
		annualDiscount: "-15% Anual",
		desc: "PDV, gestão de mesas, pedidos em tempo real, stock e relatórios de vendas para restaurantes.",
		features: [
			"Ponto de venda (PDV) táctil",
			"Gestão de mesas e reservas",
			"Pedidos em tempo real para cozinha",
			"Controlo de stock e ingredientes",
			"Relatórios de vendas e facturação",
			"Gestão de colaboradores e turnos",
			"Actualizações de software e suporte técnico anual"
		],
		deadline: "30 a 60 dias úteis",
		ideal: "Restaurantes, cafés, snacks e bares.",
		featured: false
	}
];
var DEFAULT_PORTFOLIO = [{
	id: "makumbu",
	name: "+Kumbú",
	url: "https://makemoney.social.br/",
	display: "makemoney.social.br",
	screenshot: "/makemoney-preview.png",
	desc: "Plataforma angolana onde trabalhadores ganham dinheiro ao completar tarefas de marketing, e clientes promovem as suas redes sociais e negócios através de uma comunidade activa.",
	tags: [
		"Plataforma",
		"Marketing Social",
		"Angola"
	],
	accent: "oklch(0.65_0.18_150)"
}, {
	id: "semfiltros",
	name: "Sem Filtros",
	url: "https://www.semfiltros.com",
	display: "semfiltros.com",
	screenshot: "/semfiltros-preview.png",
	desc: "Portal de notícias angolano independente com cobertura jornalística sem censura e conteúdos de actualidade.",
	tags: [
		"Portal de Notícias",
		"Editorial",
		"Angola"
	],
	accent: "oklch(0.65_0.18_25)"
}];
async function hashPassword(password) {
	const data = new TextEncoder().encode(password);
	const hashBuffer = await crypto.subtle.digest("SHA-256", data);
	return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function loadStore() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return getDefaultStore();
		const parsed = JSON.parse(raw);
		const servicesLoaded = (parsed.services ?? DEFAULT_SERVICES).map((svc) => {
			const defaultMatch = DEFAULT_SERVICES.find((d) => d.id === svc.id);
			let price = svc.price;
			let annualPrice = svc.annualPrice || defaultMatch?.annualPrice || "";
			if (svc.id === "landing-page" && (svc.price === "120.000 – 180.000" || !svc.price)) {
				price = "60.000 – 120.000";
				annualPrice = "50.000 – 95.000";
			}
			return {
				...svc,
				price,
				annualPrice,
				annualDiscount: svc.annualDiscount || defaultMatch?.annualDiscount || ""
			};
		});
		return {
			admin: parsed.admin ?? null,
			services: servicesLoaded,
			portfolio: parsed.portfolio ?? DEFAULT_PORTFOLIO,
			settings: {
				...DEFAULT_SETTINGS,
				...parsed.settings ?? {}
			}
		};
	} catch {
		return getDefaultStore();
	}
}
function getDefaultStore() {
	return {
		admin: null,
		services: DEFAULT_SERVICES,
		portfolio: DEFAULT_PORTFOLIO,
		settings: DEFAULT_SETTINGS
	};
}
function saveStore(store) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}
var adminStore = {
	isAdminRegistered() {
		return loadStore().admin !== null;
	},
	async register(email, password) {
		const store = loadStore();
		if (store.admin) return false;
		store.admin = {
			email,
			passwordHash: await hashPassword(password)
		};
		saveStore(store);
		return true;
	},
	async login(email, password) {
		const store = loadStore();
		if (!store.admin) return false;
		const hash = await hashPassword(password);
		return store.admin.email === email && store.admin.passwordHash === hash;
	},
	getAdminEmail() {
		return loadStore().admin?.email ?? null;
	},
	getServices() {
		return loadStore().services;
	},
	saveServices(services) {
		const store = loadStore();
		store.services = services;
		saveStore(store);
	},
	getPortfolio() {
		return loadStore().portfolio;
	},
	savePortfolio(portfolio) {
		const store = loadStore();
		store.portfolio = portfolio;
		saveStore(store);
	},
	getSettings() {
		return loadStore().settings;
	},
	saveSettings(settings) {
		const store = loadStore();
		store.settings = settings;
		saveStore(store);
	},
	resetAll() {
		localStorage.removeItem(STORAGE_KEY);
	}
};
//#endregion
export { adminStore as t };
