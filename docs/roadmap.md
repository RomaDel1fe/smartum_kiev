# Incremental delivery plan

Only one phase should be implemented and reviewed at a time.

## Phase 1 — monorepo foundation (current)

- [x] Move the existing website into `apps/web`.
- [x] Configure npm workspaces and root commands.
- [x] Define application boundaries and dependency policy.
- [x] Record the initial routing map and design-system layers.
- [x] Initialize infrastructure-only admin and API workspaces.
- [x] Add the framework-neutral contracts package and a health contract.
- [ ] Review and approve the repository foundation before adding domain modules.

## Phase 2 — web foundations

- Audit the current CSS and component structure.
- Define semantic design tokens: color, typography, spacing, radii, shadows and motion.
- Introduce layout primitives (`Container`, `Stack`, `Cluster`, `Section`).
- Establish component naming, variants and accessibility conventions.
- Add Storybook only if isolated component review is desired; otherwise use a private `/dev/design-system` route during development.

## Phase 3 — routing and content model

- Confirm the public sitemap and navigation.
- Define course, location, page and SEO content schemas.
- Separate placeholder content from presentation components.
- Define loading, empty, error and not-found behavior.

## Phase 4 — shared web components

- Extract and document Button, Heading, Text, FormField and Card primitives.
- Refactor Header, Footer, CourseCard and LeadForm on top of them.
- Add responsive and accessibility checks.

## Phase 5 — page implementation

- Build one approved page at a time.
- Start with the homepage, then course listing, course detail, about and contacts.
- Review content, responsive behavior and SEO after each route.

## Phase 6 — API domain implementation

- Approve domain entities and authorization roles.
- Extend `packages/contracts` with approved domain schemas.
- Add Prisma models and migrations in `apps/api`.
- Implement only the endpoints needed by the finished public website.

## Phase 7 — admin implementation

- Define roles and editorial workflows.
- Implement features by domain: courses, locations, pages, leads and media.
