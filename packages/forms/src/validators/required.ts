export default function requiredValidator(value: unknown) {
  if (value == null || value === '') {
    return {};
  }

  if (Array.isArray(value) && value.length === 0) {
    return {};
  }

  return null;
}
