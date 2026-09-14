# Portfolio technical notes

## Runtime model

The site is a static export. Vinext renders the application routes during the build, then GitHub Pages serves the generated files from `dist/client`. There is no runtime API or server dependency for the portfolio itself.

## UI architecture

The page is composed from focused React sections: the topbar, hero, experience timeline, project stories, technical skills, education, blog, and contact panel. Shared controls are kept in `components/ui`, while page-specific composition stays in `app`.

## Interaction and accessibility

Theme state is applied to the document through a light and dark theme toggle. Scroll reveal uses data attributes and CSS transitions, with reduced-motion behavior respected for visitors who disable animation. Navigation targets stable section IDs so the topbar remains usable on the single-page layout.

## Delivery

`.github/workflows/deploy-pages.yml` installs the locked dependencies, builds the static export, prefixes generated asset URLs for the repository Pages path, and deploys the resulting artifact to the `github-pages` environment.
