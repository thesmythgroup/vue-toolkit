import { Auth } from '@aws-amplify/auth';
import { NavigationGuardNext, Route } from 'vue-router';

export async function requireAuthGuard<T>(
  this: T,
  to: Route,
  from: Route,
  next: NavigationGuardNext
) {
  if (!to.matched.some((x) => x.meta.requireAuth)) {
    return next();
  }

  const user = await Auth.currentAuthenticatedUser();

  if (!user) {
    // todo: router config
    return next({ name: 'awsAuth.signIn' });
  }

  next();
}
