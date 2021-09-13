/* eslint-disable @typescript-eslint/no-explicit-any */
import minLengthValidator from './min-length';

describe('minLength validator', () => {
  it('should not error if min is null', () => {
    expect(minLengthValidator(null as any)('abc')).toBeNull();
  });

  it('should not error if min is undefined', () => {
    expect(minLengthValidator(undefined as any)('abc')).toBeNull();
  });

  it('should not error if min is NaN', () => {
    expect(minLengthValidator(NaN)('abc')).toBeNull();
  });

  it('should not error on null', () => {
    expect(minLengthValidator(8)(null as any)).toBeNull();
  });

  it('should not error on undefined', () => {
    expect(minLengthValidator(8)(undefined as any)).toBeNull();
  });

  it('should not error on equal value length', () => {
    expect(minLengthValidator(2)('ab')).toBeNull();
  });

  it('should not error on longer value length', () => {
    expect(minLengthValidator(2)('abc')).toBeNull();
  });

  it('should error on shorter value length', () => {
    expect(minLengthValidator(2)('')).toEqual({
      minLength: {
        required: 2,
        actual: 0,
      },
    });
  });
});
