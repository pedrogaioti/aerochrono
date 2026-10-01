import { z } from 'zod';

/** Confidence assigned to a historical claim after source review. */
export const historicalConfidenceSchema = z.enum([
  'verified',
  'high',
  'medium',
  'low',
  'unverified',
]);
export type HistoricalConfidence = z.infer<typeof historicalConfidenceSchema>;

/** Shared validity period used for time-dependent aviation records. */
export const validityPeriodSchema = z
  .object({
    validFrom: z.string().date().nullable(),
    validTo: z.string().date().nullable(),
  })
  .refine(
    ({ validFrom, validTo }) =>
      validFrom === null || validTo === null || validFrom <= validTo,
    { message: 'validFrom must be on or before validTo' },
  );
export type ValidityPeriod = z.infer<typeof validityPeriodSchema>;
