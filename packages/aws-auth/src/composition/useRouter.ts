import { getCurrentInstance } from 'vue-demi';
import VueRouter from 'vue-router';

export function useRouter() {
  const inst = getCurrentInstance();
  return inst?.proxy.$router as VueRouter;
}
