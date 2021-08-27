export interface AuthConfig {
  allowRememberDevice?: boolean;
  allowSignUp?: boolean;
  signUpVerification?: AuthSignUpVerification;
}

export interface AuthError {
  code: string;
  name: string;
  message: string;
}

export enum AuthSignUpVerification {
  None,
  Code,
  Link,
}
