# kaian.dev — Portfólio

Portfólio pessoal de **Kaian Vasconcelos**, desenvolvedor frontend. Site em [kaiandev.site](https://kaiandev.site).

Interfaces que funcionam, construídas com cuidado.

## Funcionalidades

- Seções: hero, sobre, stack, trajetória, projetos e contato
- Internacionalização (PT/EN) com [Paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)
- Tema claro/escuro
- SEO com Open Graph e Twitter Cards
- Layout responsivo com menu mobile

## Stack

- [SvelteKit](https://kit.svelte.dev/) + [Svelte 5](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-svelte](https://www.shadcn-svelte.com/) / [bits-ui](https://bits-ui.com/)
- [Vite](https://vite.dev/)

## Desenvolvimento

Requisitos: Node.js e [pnpm](https://pnpm.io/).

```sh
pnpm install
cp .env.example .env
pnpm dev
```

O servidor de desenvolvimento inicia em `http://localhost:5173`. Para abrir automaticamente no navegador:

```sh
pnpm dev -- --open
```

### Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `PUBLIC_SITE_ORIGIN` | URL pública do site (canonical, Open Graph, etc.) |

Exemplo:

```env
PUBLIC_SITE_ORIGIN=https://kaiandev.site
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm preview` | Preview do build |
| `pnpm check` | Verificação de tipos |
| `pnpm lint` | Lint com Prettier e ESLint |
| `pnpm format` | Formata o código |

## Estrutura

```
src/
├── lib/
│   ├── components/   # Componentes da página
│   ├── constants/    # Dados estáticos (carreira, stack, links)
│   └── assets/       # Imagens e ícones
├── routes/           # Rotas SvelteKit
messages/             # Traduções (pt, en)
static/               # Arquivos estáticos (og.jpg, robots.txt)
```

## Contato

- Site: [kaiandev.site](https://kaiandev.site)
- GitHub: [@KaianDev](https://github.com/KaianDev)
- LinkedIn: [kaiandev](https://www.linkedin.com/in/kaiandev)
- Instagram: [@kaian.dev](https://www.instagram.com/kaian.dev)

## Licença

Projeto pessoal. Todos os direitos reservados.
