/* eslint-disable @typescript-eslint/no-explicit-any */
import minValidator from './min';

describe('min validator', () => {
  it('should not error if min is null', () => {
    expect(minValidator(null as any)(3)).toBeNull();
  });

  it('should not error if min is undefined', () => {
    expect(minValidator(undefined as any)(3)).toBeNull();
  });

  it('should not error if min is NaN', () => {
    expect(minValidator(NaN)(3)).toBeNull();
  });

  it('should not error on null', () => {
    expect(minValidator(8)(null as any)).toBeNull();
  });

  it('should not error on undefined', () => {
    expect(minValidator(8)(undefined as any)).toBeNull();
  });

  it('should not error on equal value length', () => {
    expect(minValidator(2)(2)).toBeNull();
  });

  it('should not error on larger value length', () => {
    expect(minValidator(2)(3)).toBeNull();
  });

  it('should error on NaN', () => {
    expect(minValidator(8)(NaN)).toEqual({
      min: {
        required: 8,
        actual: NaN,
      },
    });
  });

  it('should error on smaller value length', () => {
    expect(minValidator(2)(0)).toEqual({
      min: {
        required: 2,
        actual: 0,
      },
    });
  });
});
