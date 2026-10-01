# Architecture — AeroChrono

## Target structure

```
apps/
  mobile/
  admin/
packages/
  database/
  types/
  ui/
  utils/
supabase/
  migrations/
  seed/
docs/
```

## Mobile
- React Native
- Expo
- Expo Router
- TypeScript strict
- Zustand for local client state
- TanStack Query for server data/cache
- Zod for validation

## Backend
- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Row Level Security

## Admin
- Next.js
- TypeScript
- Supabase

## Data architecture
Historical entities are modeled with validity periods rather than overwritten snapshots.

Core domain:
- airlines
- airports
- aircraft manufacturers/types/variants
- registrations
- liveries
- historical fleets
- historical routes
- historical schedules
- sources/source links
- tours
- user-owned data

## API/query principles
- server-side filtering
- pagination
- period filters
- indexes on ICAO/IATA/registration/flight number and foreign keys
- no full-dataset download
- viewport-based map loading in future

## Security
Historical published data may be readable by authenticated users.
User data is owner-scoped through RLS.
Admin mutation rights are separated from ordinary users.

## Future simulator bridge
A separate Windows application will later communicate with:
- MSFS via SimConnect
- Prepar3D via SimConnect
- X-Plane via DataRefs/UDP/plugin

The bridge must remain decoupled from the mobile app architecture.
