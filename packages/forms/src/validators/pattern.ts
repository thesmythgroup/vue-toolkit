export default function patternValidator(pattern: RegExp) {
  return (value: string) => {
    if (value == null || !pattern) {
      // don't validate empty values to allow optional controls
      return null;
    }

    return pattern.test(value)
      ? null
      : { pattern: { required: pattern.toString(), actual: value } };
  };
}
