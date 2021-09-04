export default function minLengthValidator(min: number) {
  return (value: string) => {
    if (value == null || !min) {
      // don't validate empty values to allow optional controls
      return null;
    }

    return value.length >= min ? null : { required: min, actual: value.length };
  };
}
