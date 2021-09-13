/* eslint-disable @typescript-eslint/no-explicit-any */
import maxLengthValidator from './max-length';

describe('maxLength validator', () => {
  it('should not error if max is null', () => {
    expect(maxLengthValidator(null as any)('abc')).toBeNull();
  });

  it('should not error if max is undefined', () => {
    expect(maxLengthValidator(undefined as any)('abc')).toBeNull();
  });

  it('should not error if max is NaN', () => {
    expect(maxLengthValidator(NaN)('abc')).toBeNull();
  });

  it('should not error on null', () => {
    expect(maxLengthValidator(8)(null as any)).toBeNull();
  });

  it('should not error on undefined', () => {
    expect(maxLengthValidator(8)(undefined as any)).toBeNull();
  });

  it('should not error on shorter value length', () => {
    expect(maxLengthValidator(2)('')).toBeNull();
  });

  it('should not error on equal value length', () => {
    expect(maxLengthValidator(2)('ab')).toBeNull();
  });

  it('should error on longer value length', () => {
    expect(maxLengthValidator(2)('abc')).toEqual({
      maxLength: {
        required: 2,
        actual: 3,
      },
    });
  });
});
