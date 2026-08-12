export type Project = {
  slug: string;
  name: string;
  label: string;
  description: string;
  stack: string[];
  status: string;
  highlights: string[];
  image?: string;
  demo?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    name: "Fernando Portfolio",
    label: "Portfólio",
    description:
      "Portfólio pessoal interativo com storytelling, animações de scroll, assets otimizados e deploy na Vercel.",
    stack: ["React", "Vite", "TypeScript", "Framer Motion", "Vercel"],
    status: "Publicado",
    highlights: ["Scroll storytelling", "Foto e OG otimizadas", "Código público"],
    image: "/images/projects/portfolio.webp",
    demo: "https://fernandoportfolio-eight.vercel.app",
    github: "https://github.com/Nanduuh/fernandoportfolio",
  },
  {
    slug: "blogestudos",
    name: "BlogEstudos",
    label: "Educação",
    description: "Blog educacional desenvolvido com HTML, CSS e JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Projeto real",
    highlights: ["Interface de estudos", "Conteúdo organizado", "Base web autoral"],
    github: "https://github.com/Nanduuh/blog_estudos",
  },
  {
    slug: "americanalanches",
    name: "Americana Lanches",
    label: "Restaurante",
    description:
      "Website profissional para lanchonete, com cardápio, produtos, painel administrativo e pedidos orientados para retirada.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL", "Vercel"],
    status: "Publicado",
    highlights: ["Cardápio real", "Painel admin", "Pedido via WhatsApp"],
    image: "/images/projects/americanalanches.webp",
    demo: "https://americanalanches.vercel.app",
    github: "https://github.com/Nanduuh/americanalanches",
  },
  {
    slug: "onestoprs",
    name: "One Stop RS",
    label: "Automotivo",
    description:
      "Landing page premium para oficina automotiva, com visual escuro, fotos reais e foco em credibilidade.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    status: "Publicado",
    highlights: ["Visual premium", "Fotos reais", "Responsivo"],
    image: "/images/projects/onestoprs.webp",
    demo: "https://onestoprs.vercel.app",
    github: "https://github.com/Nanduuh/onestoprs",
  },
  {
    slug: "maniasdebicho",
    name: "Mania de Bicho",
    label: "Pet shop",
    description:
      "Site para pet shop com serviços, identidade visual leve, cards comerciais e chamada direta para atendimento.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    status: "Publicado",
    highlights: ["Cards de serviços", "Layout mobile", "Identidade própria"],
    image: "/images/projects/maniasdebicho.webp",
    demo: "https://maniasdebicho.vercel.app",
    github: "https://github.com/Nanduuh/maniasdebicho",
  },
  {
    slug: "esteticameiahora",
    name: "Estética Meia Hora",
    label: "Beleza",
    description:
      "Landing page para estética com apresentação de serviços, chamada para agendamento e visual elegante.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    status: "Publicado",
    highlights: ["Identidade visual", "Agendamento", "Responsivo"],
    image: "/images/projects/esteticameiahora.webp",
    demo: "https://esteticameiahora.vercel.app",
    github: "https://github.com/Nanduuh/esteticameiahora",
  },
  {
    slug: "advocacia-sites",
    name: "Sites para Advocacia",
    label: "Institucional",
    description:
      "Coleção de landing pages institucionais para profissionais da advocacia, com páginas responsivas e contato direto.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Repositórios públicos",
    highlights: ["Várias identidades", "Foco em conversão", "Responsivo"],
    image: "/images/projects/advocacia-sites.webp",
    github: "https://github.com/Nanduuh/dmadvocacia",
  },
  {
    slug: "leadhunter-ai",
    name: "LeadHunter AI",
    label: "Prospecção",
    description:
      "Aplicação para buscar, classificar e organizar oportunidades comerciais para venda de sites.",
    stack: ["React", "Node.js", "Express", "SQLite", "IA", "Vite"],
    status: "Repositório privado",
    highlights: ["Score de leads", "Dashboard", "Automação comercial"],
    image: "/images/projects/leadhunter-ai.webp",
    github: "https://github.com/Nanduuh/leadhunter-ai",
  },
  {
    slug: "duzia",
    name: "Duzia Certa",
    label: "Automação",
    description: "Projeto de automação com Telegram, Python, APIs, Playwright e Selenium.",
    stack: ["Python", "APIs", "Telegram", "Playwright", "Selenium"],
    status: "Projeto real",
    highlights: ["Bot e integrações", "Automação web", "Fluxos com APIs"],
  },
  {
    slug: "copa",
    name: "Copa Trader / Copa 2026",
    label: "Dashboard",
    description:
      "Aplicação para acompanhar apostas, banca, ROI, estatísticas, jogos e sistema de afiliados.",
    stack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    status: "Em evolução",
    highlights: ["Controle de banca", "ROI e estatísticas", "Arquitetura fullstack"],
  },
];
