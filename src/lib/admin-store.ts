// ─── Admin Store ─────────────────────────────────────────────────────────────
// Stores all editable site content in localStorage.
// The first user to register becomes the admin.

export interface AdminUser {
  email: string;
  passwordHash: string; // simple SHA-256 hex
}

export interface ServiceItem {
  id: string;
  icon: string; // lucide icon name
  name: string;
  tag: string;
  price: string;
  annualPrice?: string;
  annualDiscount?: string;
  desc: string;
  features: string[];
  deadline: string;
  ideal: string;
  featured: boolean;
}

export interface PortfolioItem {
  id: string;
  name: string;
  url: string;
  display: string;
  screenshot: string;
  desc: string;
  tags: string[];
  accent: string;
}

export interface SiteSettings {
  whatsapp: string;
  email: string;
  nif: string;
  heroTitle: string;
  heroSubtitle: string;
  catalogYear: string;
}

export interface AdminStore {
  admin: AdminUser | null;
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  settings: SiteSettings;
}

const STORAGE_KEY = "bytekwanza_admin_store";

// ─── Default data (mirrors index.tsx static data) ────────────────────────────
export const DEFAULT_SETTINGS: SiteSettings = {
  whatsapp: "957455005",
  email: "servicos.ivanlima@gmail.com",
  nif: "5003198294",
  heroTitle: "Soluções digitais que transformam o seu negócio.",
  heroSubtitle:
    "Desenvolvimento web, e-commerce, portais e sistemas personalizados. Uma equipa angolana com conhecimento local e tecnologia de ponta.",
  catalogYear: "2026",
};

export const DEFAULT_SERVICES: ServiceItem[] = [
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
      "Inclui hospedagem + domínio .ao (no plano anual)",
    ],
    deadline: "5 a 10 dias úteis",
    ideal: "Campanhas, lançamentos de produtos e eventos.",
    featured: false,
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
      "Inclui manutenção + SSL + backup (no plano anual)",
    ],
    deadline: "10 a 20 dias úteis",
    ideal: "PMEs, consultores, profissionais liberais e ONGs.",
    featured: false,
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
      "Suporte técnico prioritário (no plano anual)",
    ],
    deadline: "15 a 30 dias úteis",
    ideal: "Escritórios de advocacia, clínicas e consultorias.",
    featured: false,
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
      "Manutenção e monitorização 24/7 (no plano anual)",
    ],
    deadline: "20 a 45 dias úteis",
    ideal: "Lojas físicas, marcas, artesãos e empreendedores.",
    featured: true,
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
      "Servidor dedicado e suporte editorial (no plano anual)",
    ],
    deadline: "30 a 60 dias úteis",
    ideal: "Media, associações e portais temáticos.",
    featured: false,
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
      "SLA de suporte contínuo (no plano anual)",
    ],
    deadline: "45 a 90+ dias úteis",
    ideal: "Gestão interna, plataformas B2B e automação.",
    featured: false,
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
      "Formação de utilizadores e suporte anual incluído",
    ],
    deadline: "45 a 90 dias úteis",
    ideal: "Escolas primárias, colégios privados e institutos.",
    featured: false,
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
      "Manutenção preventiva de sistema e licença anual",
    ],
    deadline: "45 a 90 dias úteis",
    ideal: "Hotéis, residenciais, pensões e apart-hotéis.",
    featured: false,
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
      "Actualizações de software e suporte técnico anual",
    ],
    deadline: "30 a 60 dias úteis",
    ideal: "Restaurantes, cafés, snacks e bares.",
    featured: false,
  },
];

export const DEFAULT_PORTFOLIO: PortfolioItem[] = [
  {
    id: "makumbu",
    name: "+Kumbú",
    url: "https://makemoney.social.br/",
    display: "makemoney.social.br",
    screenshot: "/makemoney-preview.png",
    desc: "Plataforma angolana onde trabalhadores ganham dinheiro ao completar tarefas de marketing, e clientes promovem as suas redes sociais e negócios através de uma comunidade activa.",
    tags: ["Plataforma", "Marketing Social", "Angola"],
    accent: "oklch(0.65_0.18_150)",
  },
  {
    id: "semfiltros",
    name: "Sem Filtros",
    url: "https://www.semfiltros.com",
    display: "semfiltros.com",
    screenshot: "/semfiltros-preview.png",
    desc: "Portal de notícias angolano independente com cobertura jornalística sem censura e conteúdos de actualidade.",
    tags: ["Portal de Notícias", "Editorial", "Angola"],
    accent: "oklch(0.65_0.18_25)",
  },
  {
    id: "kwanzashop",
    name: "KwanzaShop E-Commerce",
    url: "https://bytekwanza.com/#contacto",
    display: "kwanzashop.ao",
    screenshot: "/logo.png",
    desc: "Loja virtual moderna e responsiva com catálogo dinâmico de produtos, pagamentos via Multicaixa Express e notificações automáticas no WhatsApp.",
    tags: ["E-Commerce", "Vendas Online", "Angola"],
    accent: "oklch(0.72_0.13_78)",
  },
  {
    id: "eduangola",
    name: "Portal EduAngola",
    url: "https://bytekwanza.com/#contacto",
    display: "eduangola.ao",
    screenshot: "/logo.png",
    desc: "Portal de gestão de pré-inscrições, pautas e cursos online concebido para colégios, institutos e centros de formação profissional.",
    tags: ["Educação", "Portal Web", "Angola"],
    accent: "oklch(0.60_0.15_250)",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function loadStore(): AdminStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultStore();
    const parsed = JSON.parse(raw) as Partial<AdminStore>;

    // Merge services with defaults
    const loadedSvcMap = new Map<string, ServiceItem>(
      (parsed.services || []).map((s) => [s.id, s])
    );
    const servicesMerged: ServiceItem[] = DEFAULT_SERVICES.map((defSvc) => {
      const existing = loadedSvcMap.get(defSvc.id);
      if (!existing) return defSvc;
      let price = existing.price;
      let annualPrice = existing.annualPrice || defSvc.annualPrice || "";
      if (existing.id === "landing-page" && (existing.price === "120.000 – 180.000" || !existing.price)) {
        price = "60.000 – 120.000";
        annualPrice = "50.000 – 95.000";
      }
      return {
        ...existing,
        price,
        annualPrice,
        annualDiscount: existing.annualDiscount || defSvc.annualDiscount || "",
      };
    });
    // Add custom services added by admin that are not in defaults
    (parsed.services || []).forEach((s) => {
      if (!DEFAULT_SERVICES.some((d) => d.id === s.id)) {
        servicesMerged.push(s);
      }
    });

    // Merge portfolio items with defaults
    const loadedPortMap = new Map<string, PortfolioItem>(
      (parsed.portfolio || []).map((p) => [p.id, p])
    );
    const portfolioMerged: PortfolioItem[] = DEFAULT_PORTFOLIO.map((defItem) => {
      const existing = loadedPortMap.get(defItem.id);
      return existing ? { ...defItem, ...existing } : defItem;
    });
    // Add custom portfolio items added by admin
    (parsed.portfolio || []).forEach((p) => {
      if (!DEFAULT_PORTFOLIO.some((d) => d.id === p.id)) {
        portfolioMerged.push(p);
      }
    });

    return {
      admin: parsed.admin ?? null,
      services: servicesMerged,
      portfolio: portfolioMerged,
      settings: { ...DEFAULT_SETTINGS, ...(parsed.settings ?? {}) },
    };
  } catch {
    return getDefaultStore();
  }
}

function getDefaultStore(): AdminStore {
  return {
    admin: null,
    services: DEFAULT_SERVICES,
    portfolio: DEFAULT_PORTFOLIO,
    settings: DEFAULT_SETTINGS,
  };
}

function saveStore(store: AdminStore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

// ─── Public API ───────────────────────────────────────────────────────────────

export const adminStore = {
  isAdminRegistered(): boolean {
    return loadStore().admin !== null;
  },

  async register(email: string, password: string): Promise<boolean> {
    const store = loadStore();
    if (store.admin) return false; // already registered
    const passwordHash = await hashPassword(password);
    store.admin = { email, passwordHash };
    saveStore(store);
    return true;
  },

  async login(email: string, password: string): Promise<boolean> {
    const store = loadStore();
    if (!store.admin) return false;
    const hash = await hashPassword(password);
    return store.admin.email === email && store.admin.passwordHash === hash;
  },

  getAdminEmail(): string | null {
    return loadStore().admin?.email ?? null;
  },

  // ─── Services ───────────────────────────────────────────────────────────────
  getServices(): ServiceItem[] {
    return loadStore().services;
  },
  saveServices(services: ServiceItem[]): void {
    const store = loadStore();
    store.services = services;
    saveStore(store);
  },

  // ─── Portfolio ──────────────────────────────────────────────────────────────
  getPortfolio(): PortfolioItem[] {
    return loadStore().portfolio;
  },
  savePortfolio(portfolio: PortfolioItem[]): void {
    const store = loadStore();
    store.portfolio = portfolio;
    saveStore(store);
  },

  // ─── Settings ───────────────────────────────────────────────────────────────
  getSettings(): SiteSettings {
    return loadStore().settings;
  },
  saveSettings(settings: SiteSettings): void {
    const store = loadStore();
    store.settings = settings;
    saveStore(store);
  },

  // ─── Reset ──────────────────────────────────────────────────────────────────
  resetAll(): void {
    localStorage.removeItem(STORAGE_KEY);
  },
};
