/* eslint-disable @typescript-eslint/no-explicit-any */
import patternValidator from './pattern';

describe('pattern validator', () => {
  it('should not error when pattern is null', () => {
    expect(patternValidator(null as any)('abc')).toBeNull();
  });

  it('should not error when pattern is undefined', () => {
    expect(patternValidator(undefined as any)('abc')).toBeNull();
  });

  it('should not error on null', () => {
    expect(patternValidator(/b/)(null as any)).toBeNull();
  });

  it('should not error on undefined', () => {
    expect(patternValidator(/b/)(undefined as any)).toBeNull();
  });

  it('should not error on match success', () => {
    expect(patternValidator(/b/)('abc')).toBeNull();
  });

  it('should error on match failure', () => {
    expect(patternValidator(/b/)('aaa')).toEqual({
      pattern: {
        required: '/b/',
        actual: 'aaa',
      },
    });
  });
});
