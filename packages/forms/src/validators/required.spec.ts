import requiredValidator from './required';

describe('required validator', () => {
  it('should not error on zero', () => {
    expect(requiredValidator(0)).toBeNull();
  });

  it('should not error  for non-empty string', () => {
    expect(requiredValidator('abc')).toBeNull();
  });

  it('should not error on empty array', () => {
    expect(requiredValidator([1, 2])).toBeNull();
  });

  it('should error on null', () => {
    expect(requiredValidator(null)).toEqual({});
  });

  it('should error on undefined', () => {
    expect(requiredValidator(undefined)).toEqual({});
  });

  it('should error on empty string', () => {
    expect(requiredValidator('')).toEqual({});
  });

  it('should error on empty array', () => {
    expect(requiredValidator([])).toEqual({});
  });
});
