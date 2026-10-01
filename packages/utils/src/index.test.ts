import { describe, expect, it } from 'vitest';
import { isValidOn } from './index';

describe('isValidOn', () => {
  it('includes both validity boundaries', () => {
    expect(isValidOn('1970-01-01', '1979-12-31', '1979-12-31')).toBe(true);
  });

  it('supports open-ended periods and rejects dates before the start', () => {
    expect(isValidOn('1970-01-01', null, '1969-12-31')).toBe(false);
    expect(isValidOn('1970-01-01', null, '2020-01-01')).toBe(true);
  });
});
