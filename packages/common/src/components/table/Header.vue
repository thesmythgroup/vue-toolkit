<script lang="ts">
import Vue, { VNode } from 'vue';

export default Vue.extend({
  name: 'v-header',
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
  render(h) {
    const col = this.column as VNode;
    const slots = col.data?.scopedSlots;
    const props = col.componentOptions?.propsData as Record<string, string>;

    return h('th', { class: 'table__header' }, [
      slots?.header ? slots.header({}) : props?.label,
    ]);
  },
});
</script>
