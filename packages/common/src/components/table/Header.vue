<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'v-header',
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
  render(h) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const col = this.column as any; // VNode
    const slots = col.data?.scopedSlots;
    const props = col.componentOptions?.propsData as Record<string, string>;

    return h('th', { class: 'table__header' }, [
      slots?.header ? slots.header({}) : props?.label,
    ]);
  },
});
</script>
