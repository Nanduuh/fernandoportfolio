# Fernando Soares | Portfólio

Portfólio pessoal interativo feito com React, Vite, TypeScript, Framer Motion e CSS.

## Instalação

```bash
npm install
```

## Desenvolvimento local

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deploy na Vercel

O projeto está pronto para Vercel. Basta importar o repositório/projeto e usar:

- Build command: `npm run build`
- Output directory: `dist`

## Onde alterar dados

- Dados pessoais: `src/config/profile.ts`
- Projetos: `src/data/projects.ts`
- Experiência e formação: `src/data/timeline.ts`
- Tecnologias e habilidades: `src/data/skills.ts`

## Foto e currículo

- Foto original: `assets/source/fernando.png`
- Foto otimizada usada no site: `public/images/fernando.webp`
- Gerar foto otimizada, ícones e Open Graph: `npm run assets`
- Currículo para download: `public/curriculo.pdf`

## Adicionar novos projetos

Adicione um item em `src/data/projects.ts`. Use `demo` ou `github` apenas quando o link existir de verdade.
