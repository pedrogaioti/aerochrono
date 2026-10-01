# AeroChrono Agent Rules

This repository is the single source of truth for all AI agents and human contributors.

## Mission
Build AeroChrono as an **Aviation Time Machine** for flight simulation.

Core question:
> What could I realistically fly here, with this airline and this aircraft, during this period of aviation history?

## Roles
- **Codex**: primary implementation agent. Owns application code, tests, migrations, CI, integrations, and technical execution.
- **Claude**: architecture and review agent. Owns architectural review, historical data rules, schema review, decision analysis, and PR review.
- **Emergent**: UI/UX prototyping agent. Owns rapid screen concepts, interaction ideas, visual exploration, and isolated frontend prototypes.
- **GitHub**: shared memory and source of truth.

## Rules
1. Read this file, README.md, docs/PRODUCT.md, docs/ARCHITECTURE.md, docs/DATA_RULES.md, and the assigned Issue before changing code.
2. Work from an Issue. Do not expand scope silently.
3. Never push directly to `main`. Use feature branches and Pull Requests.
4. Never fabricate historical facts. Every historical claim must have a source or be marked `demo_data=true` / `unverified`.
5. Preserve temporal validity for airlines, fleets, routes, airports, registrations, and liveries.
6. Prefer small, reviewable PRs.
7. Do not rewrite working architecture without recording the reason in docs/DECISIONS.md.
8. TypeScript must use strict mode. Avoid unnecessary `any`.
9. Validate external/user data with Zod.
10. Add tests for historical filtering and Surprise Me behavior.
11. Do not put secrets in the repository.
12. Mobile-first design is mandatory.

## Branch naming
- codex/<issue>-<short-name>
- claude/<issue>-<short-name>
- emergent/<issue>-<short-name>

## Definition of done
A task is done only when:
- the requested scope is implemented;
- relevant tests pass;
- lint/typecheck pass where applicable;
- docs are updated when behavior or architecture changes;
- historical demo data is clearly labeled;
- a PR explains what changed and how to verify it.

## Historical validity rule
For a selected date X, a period entity is active when:

`valid_from <= X AND (valid_to >= X OR valid_to IS NULL)`

Equivalent rules apply to founded/ceased and opened/closed dates.

## Product guardrail
AeroChrono is not:
- a generic flight tracker;
- a virtual airline;
- only a map;
- only a timetable database.

It must make aviation history explorable and flyable.
