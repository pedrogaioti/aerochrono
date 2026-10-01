import { describe, expect, it } from 'vitest';
import { historicalConfidenceSchema, validityPeriodSchema } from './index';

describe('shared domain types', () => {
  it('supports confidence labels from the data rules', () => {
    expect(historicalConfidenceSchema.parse('unverified')).toBe('unverified');
    expect(historicalConfidenceSchema.safeParse('certain').success).toBe(false);
  });

  it('allows open-ended validity periods', () => {
    expect(
      validityPeriodSchema.parse({ validFrom: '1970-01-01', validTo: null })
        .validTo,
    ).toBeNull();
    expect(
      validityPeriodSchema.safeParse({
        validFrom: '1979-01-01',
        validTo: '1970-01-01',
      }).success,
    ).toBe(false);
  });
});
