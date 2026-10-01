/** Checks a historical validity interval using inclusive boundary dates. */
export function isValidOn(
  validFrom: string | null,
  validTo: string | null,
  date: string,
): boolean {
  return (
    (validFrom === null || validFrom <= date) &&
    (validTo === null || validTo >= date)
  );
}
