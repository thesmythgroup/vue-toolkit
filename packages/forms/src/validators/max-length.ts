export default function maxLengthValidator(max: number) {
  return (value: string) => {
    if (value == null || !max) {
      // don't validate empty values to allow optional controls
      return null;
    }

    return value.length <= max ? null : { required: max, actual: value.length };
  };
}
