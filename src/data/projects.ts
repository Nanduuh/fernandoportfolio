export type Project = {
  slug: string;
  name: string;
  label: string;
  description: string;
  stack: string[];
  status: string;
  highlights: string[];
  demo?: string;
  github?: string;
};

export const projects: Project[] = [
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
    slug: "copa",
    name: "Copa Trader / Copa 2026",
    label: "Dashboard",
    description:
      "Aplicação para acompanhar apostas, banca, ROI, estatísticas, jogos e sistema de afiliados.",
    stack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    status: "Em evolução",
    highlights: ["Controle de banca", "ROI e estatísticas", "Arquitetura fullstack"],
  },
  {
    slug: "americana",
    name: "Americana Lanches",
    label: "Site profissional",
    description:
      "Website profissional para lanchonete, com produtos, cardápio e informações de contato.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    status: "Publicado",
    highlights: ["Cardápio visual", "Contato direto", "Deploy na Vercel"],
    demo: "https://americanalanches.vercel.app",
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
    slug: "excel",
    name: "Excel / VBA",
    label: "Produtividade",
    description: "Automação de planilhas, formulários, macros e processos administrativos.",
    stack: ["Excel", "VBA", "Office 365", "Automação"],
    status: "Uso profissional",
    highlights: ["Macros VBA", "Rotinas internas", "Menos trabalho manual"],
  },
];
