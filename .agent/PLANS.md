# AeroChrono Implementation Plan

## Phase 0 — Foundation
- Monorepo skeleton
- Expo mobile app
- Next.js admin app
- shared types
- Supabase local/project configuration
- lint/typecheck/test baseline

## Phase 1 — Historical core
- auth/profile
- temporal data model
- airlines
- aircraft
- airports
- historical routes
- sources/confidence
- search

## Phase 2 — User value
- onboarding
- era timeline
- My Hangar
- Surprise Me
- favorites
- historical logbook

## Phase 3 — Exploration
- historical map
- tours
- badges/progress
- richer airline/aircraft/airport timelines

## Phase 4 — Data operations
- admin CRUD
- CSV/JSON staging
- validation
- duplicate detection
- source review workflow

## Phase 5 — Simulator bridge
- Windows bridge
- MSFS SimConnect
- X-Plane DataRefs/UDP/plugin
- Prepar3D SimConnect
- live flight detection/logging

## Working rule
Only one phase may be broadened after the previous critical path is usable end-to-end.
