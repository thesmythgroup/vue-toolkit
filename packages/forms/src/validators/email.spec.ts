/* eslint-disable @typescript-eslint/no-explicit-any */
import emailValidator from './email';

describe('email validator', () => {
  it('should not error on null', () => {
    expect(emailValidator(null as any)).toBeNull();
  });

  it('should not error on undefined', () => {
    expect(emailValidator(undefined as any)).toBeNull();
  });

  it('should not error on valid email', () => {
    expect(emailValidator('example@gmail.com')).toBeNull();
  });

  it('should error on invalid email', () => {
    expect(emailValidator('invalid')).toEqual({});
  });
});
