# AeroChrono

**Aviation Time Machine**

Choose an era. Choose an aircraft. Relive aviation history.

AeroChrono is a historical aviation companion for flight simulation. The product helps users discover historically plausible flights by era, airline, aircraft, airport, route, registration, and source confidence.

## Core principles

- Historical claims must be sourced or explicitly marked as demo/unverified.
- Time is a first-class dimension: fleets, routes, registrations, liveries, and airports are period-aware.
- The app is not a virtual airline or generic flight tracker; it is an aviation time machine.
- One repository is the source of truth for Claude, Codex, Emergent, and human contributors.

## Initial stack

- Mobile: React Native + Expo + TypeScript
- Routing: Expo Router
- State: Zustand
- Server data/cache: TanStack Query
- Backend: Supabase
- Database: PostgreSQL
- Admin: Next.js + TypeScript
- Validation: Zod

See `AGENTS.md` and `docs/` before making changes.

## Development

Requirements:

- Node.js 22
- pnpm 11.19.0

Install dependencies and create a local environment file:

```bash
pnpm install
cp .env.example .env.local
```

Run both applications, or start one application at a time:

```bash
pnpm dev
pnpm dev:mobile
pnpm dev:admin
```

Run the repository quality gates:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm format:check
```

The workspace contains the Expo application in `apps/mobile`, the Next.js
administration application in `apps/admin`, and shared code in `packages/`.
