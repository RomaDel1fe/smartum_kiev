# SMARTUM Kyiv

Monorepo for the SMARTUM Kyiv digital platform.

## Current stage

The repository architecture is initialized. The public website contains the current product work; the admin panel and API contain infrastructure-only shells without business modules.

```text
smartum-kiev/
├── apps/
│   ├── web/          # Next.js public website
│   ├── admin/        # Next.js infrastructure shell
│   └── api/          # NestJS infrastructure shell
├── packages/
│   └── contracts/    # framework-neutral API contracts
├── docs/
│   ├── architecture.md
│   ├── roadmap.md
│   └── adr/
├── package.json      # npm workspaces root
└── package-lock.json
```

Planned applications:

- `apps/web` — public Next.js website;
- `apps/admin` — separate Next.js admin panel shell;
- `apps/api` — NestJS API shell with Prisma configured for PostgreSQL.

## Commands

```bash
npm install
npm run dev
npm run dev:admin
npm run dev:api
npm run typecheck
npm run lint
npm run build
```

Local ports: web `3000`, admin `3001`, API `4000`. The API health check is available at `GET /api/health`.

Architecture decisions are documented in [docs/architecture.md](docs/architecture.md). The staged implementation plan is in [docs/roadmap.md](docs/roadmap.md).
