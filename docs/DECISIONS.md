# Architecture & Product Decisions

This file records decisions that materially affect architecture, data modeling, UX, or development workflow.

## ADR-001 — GitHub is the shared source of truth
**Status:** Accepted

Claude, Codex, Emergent, and human contributors coordinate through repository files, Issues, branches, and Pull Requests rather than maintaining independent project states.

## ADR-002 — Supabase/PostgreSQL is the primary backend
**Status:** Accepted

Reason: relational historical data, temporal queries, provenance links, RLS, and admin workflows fit PostgreSQL well.

## ADR-003 — Historical data requires provenance/confidence
**Status:** Accepted

Unsourced development data must be clearly labeled as demo/unverified.

## ADR-004 — Mobile-first, bridge later
**Status:** Accepted

The MVP focuses on the mobile historical experience. Simulator telemetry will be implemented later through a separate desktop bridge.
