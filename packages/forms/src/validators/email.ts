// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
const EMAIL_REGEXP =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default function emailValidator(value: string) {
  if (value == null) {
    // don't validate empty values to allow optional controls
    return null;
  }

  return EMAIL_REGEXP.test(value) ? null : { email: true };
}
