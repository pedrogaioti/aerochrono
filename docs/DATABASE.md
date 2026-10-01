# Database — AeroChrono

## Initial tables
- profiles
- simulators
- developers
- addons
- user_addons
- airlines
- airline_aliases
- airports
- airport_aliases
- aircraft_manufacturers
- aircraft_types
- aircraft_variants
- liveries
- registrations
- historical_fleets
- historical_routes
- historical_schedules
- sources
- source_links
- tours
- tour_legs
- user_tour_progress
- logbook_entries
- favorites
- badges
- user_badges

## Key historical route fields
- id
- airline_id
- flight_number
- origin_airport_id
- destination_airport_id
- aircraft_type_id
- aircraft_variant_id
- valid_from
- valid_to
- departure_time_local
- arrival_time_local
- days_of_week
- service_type
- distance_nm
- estimated_duration_minutes
- confidence
- demo_data
- notes
- created_at

## Provenance
`sources` records evidence.
`source_links` associates evidence with entities.

Confidence values:
- verified
- high
- medium
- low
- unverified

A historical route must have at least one source link or be explicitly marked as demo/unverified.

## Temporal rule
For selected date X:

`valid_from <= X AND (valid_to >= X OR valid_to IS NULL)`

The same concept applies to:
- airline founded/ceased
- airport opened/closed
- registration assignment periods
- fleet periods
- livery periods

## User-owned tables
RLS must ensure users only mutate their own:
- profile
- user_addons
- favorites
- logbook_entries
- user_tour_progress
- user_badges where user-generated progress is involved
