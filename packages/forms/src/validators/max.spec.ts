/* eslint-disable @typescript-eslint/no-explicit-any */
import maxValidator from './max';

describe('max validator', () => {
  it('should not error if max is null', () => {
    expect(maxValidator(null as any)(3)).toBeNull();
  });

  it('should not error if max is undefined', () => {
    expect(maxValidator(undefined as any)(3)).toBeNull();
  });

  it('should not error if max is NaN', () => {
    expect(maxValidator(NaN)(3)).toBeNull();
  });

  it('should not error on null', () => {
    expect(maxValidator(8)(null as any)).toBeNull();
  });

  it('should not error on undefined', () => {
    expect(maxValidator(8)(undefined as any)).toBeNull();
  });

  it('should not error on smaller value length', () => {
    expect(maxValidator(2)(0)).toBeNull();
  });

  it('should not error on equal value length', () => {
    expect(maxValidator(2)(2)).toBeNull();
  });

  it('should error on NaN', () => {
    expect(maxValidator(8)(NaN)).toEqual({
      max: {
        required: 8,
        actual: NaN,
      },
    });
  });

  it('should error on larger value length', () => {
    expect(maxValidator(2)(3)).toEqual({
      max: {
        required: 2,
        actual: 3,
      },
    });
  });
});
