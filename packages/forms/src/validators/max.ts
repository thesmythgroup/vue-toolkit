export default function maxValidator(max: number) {
  return (value: number) => {
    if (value == null || !max) {
      // don't validate empty values to allow optional controls
      return null;
    }

    return !isNaN(value) && value <= max
      ? null
      : { required: max, actual: value };
  };
}
