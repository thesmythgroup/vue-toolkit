<script lang="ts">
import { defineComponent, h, isVue3 } from 'vue-demi';

export default defineComponent({
  name: 'v-header',
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
  render(h2) {
    if (isVue3) {
      const { children, props } = this.column;

      return h('th', { class: 'table__header' }, [
        children?.header ? children.header({}) : props?.label,
      ]);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const col = this.column as any; // VNode
      const slots = col.data?.scopedSlots;
      const props = col.componentOptions?.propsData as Record<string, string>;

      return h2('th', { class: 'table__header' }, [
        slots?.header ? slots.header({}) : props?.label,
      ]);
    }
  },
});
</script>
