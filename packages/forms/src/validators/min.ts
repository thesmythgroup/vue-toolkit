export default function minValidator(min: number) {
  return (value: number) => {
    if (value == null || !min) {
      // don't validate empty values to allow optional controls
      return null;
    }

    return !isNaN(value) && value >= min
      ? null
      : { min: { required: min, actual: value } };
  };
}
