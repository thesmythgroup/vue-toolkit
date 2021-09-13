import { ValidatorErrors } from '../../interfaces';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormSubmitEvent {
  value: Record<string, unknown>;
  errors: ValidatorErrors | null;
  valid: boolean;
  invalid: boolean;
}
