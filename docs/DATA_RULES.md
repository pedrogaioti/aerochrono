# Historical Data Rules

## 1. No invented history
Never present fabricated schedules, routes, registrations, liveries, dates, or aircraft assignments as real.

If a record exists only for development/demo purposes:
- set `demo_data=true`, or
- set confidence to `unverified`,
- display this status in the UI.

## 2. Sources are first-class
Preferred source categories:
1. official airline timetable / official airline archive
2. official airport timetable / official airport archive
3. government or aviation authority
4. contemporary industry publications
5. books and reputable historical databases
6. photographic evidence
7. community sources

Community sources may help discovery but should not automatically receive verified confidence.

## 3. Confidence
- **verified**: direct, strong documentary evidence
- **high**: multiple strong sources or highly reliable indirect evidence
- **medium**: credible but incomplete evidence
- **low**: weak or partially conflicting evidence
- **unverified**: not yet validated

## 4. Temporal accuracy
All historical queries must respect validity dates.

A closed airport may appear before its closure date.
A ceased airline may appear before its ceased date.
A route must not appear outside its validity period.
A registration must not be attached to an airline outside its assignment period.

## 5. Unknown is better than false precision
Nullable historical fields are acceptable.
Do not manufacture exact departure times, registrations, or dates where evidence only supports a broader period.

## 6. Conflicts
When sources disagree:
- retain source links;
- lower confidence if appropriate;
- add notes;
- avoid silently choosing unsupported precision.

## 7. Import workflow
Bulk imports must use staging:
upload -> parse -> validate -> detect duplicates -> review -> publish.
