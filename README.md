# Vraj Patel Portfolio

Professional portfolio for Vraj Patel, AI Software Engineer, Agentic AI builder, and Forward Deployed Engineer.

## Technical implementation

- React 19 with TypeScript and Vinext for static rendering
- Vite 8 with Tailwind CSS 4 and PostCSS
- Responsive sections for experience, projects, technical skills, blog, and contact
- Light and dark themes stored through a document theme attribute
- Accessible navigation, keyboard-friendly controls, and reduced-motion support
- GitHub Pages deployment through `.github/workflows/deploy-pages.yml`
- Public assets and the downloadable CV live in `public/`

## Project structure

```text
app/                 Pages, layout, content, and interactive sections
components/ui/       Reusable interface primitives
hooks/               Shared React hooks
lib/                 Shared utilities
public/              Profile image, favicon, and CV
.github/workflows/   GitHub Pages build and deployment
```

## Run locally

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm run build
```

Live site: [vraj6198.github.io/vraj-patel-portfolio](https://vraj6198.github.io/vraj-patel-portfolio/)
