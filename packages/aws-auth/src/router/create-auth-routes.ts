import {
  AuthRoot,
  ChangePassword,
  ConfirmSignIn,
  ConfirmSignUp,
  ForgotPassword,
  ForgotPasswordSubmit,
  RequireNewPassword,
  SetupMFA,
  SignIn,
  SignUp,
} from '../components';

export function createAuthRoutes(root = '/') {
  const routes = [
    {
      path: root,
      component: AuthRoot,
      children: [
        {
          path: 'sign-in',
          name: 'awsAuth.signIn',
          component: SignIn,
          meta: { requireAuth: false },
        },
        {
          path: 'sign-up',
          name: 'awsAuth.signUp',
          component: SignUp,
          meta: { requireAuth: false },
        },
        {
          path: 'confirm-sign-in',
          name: 'awsAuth.confirmSignIn',
          component: ConfirmSignIn,
          meta: { requireAuth: false },
        },
        {
          path: 'confirm-sign-up',
          name: 'awsAuth.confirmSignUp',
          component: ConfirmSignUp,
          meta: { requireAuth: false },
        },
        {
          path: 'forgot-password',
          name: 'awsAuth.forgotPassword',
          component: ForgotPassword,
          meta: { requireAuth: false },
        },
        {
          path: 'forgot-password-submit',
          name: 'awsAuth.forgotPasswordSubmit',
          component: ForgotPasswordSubmit,
          meta: { requireAuth: false },
        },
        {
          path: 'require-new-password',
          name: 'awsAuth.requireNewPassword',
          component: RequireNewPassword,
          meta: { requireAuth: false },
        },
        {
          path: 'change-password',
          name: 'awsAuth.changePassword',
          component: ChangePassword,
          meta: { requireAuth: true },
        },
        {
          path: 'setup-mfa',
          name: 'awsAuth.setupMFA',
          component: SetupMFA,
          meta: { requireAuth: true },
        },
      ],
    },
  ];

  return routes;
}
