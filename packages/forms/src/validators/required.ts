export default function requiredValidator(value: unknown) {
  if (value == null || value === '') {
    return { required: true };
  }

  if (Array.isArray(value) && value.length === 0) {
    return { required: true };
  }

  return null;
}
