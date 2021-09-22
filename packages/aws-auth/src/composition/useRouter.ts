import { getCurrentInstance } from '@vue/composition-api';
import VueRouter from 'vue-router';

export function useRouter() {
  const inst = getCurrentInstance();
  return inst?.proxy.$router as VueRouter;
}
