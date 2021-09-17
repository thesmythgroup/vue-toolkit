<script lang="ts">
import { defineComponent, h, isVue3 } from 'vue-demi';

export default defineComponent({
  name: 'v-cell',
  props: {
    row: {
      type: Object,
      required: true,
    },
    column: {
      type: Object,
      required: true,
    },
  },
  render(h2) {
    if (isVue3) {
      const { children } = this.column;

      return h(
        'td',
        { class: 'table__cell' },
        children?.default ? [children.default({ row: this.row })] : []
      );
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const col = this.column as any; // VNode
      const slots = col.data?.scopedSlots;

      return h2(
        'td',
        { class: 'table__cell' },
        slots?.default ? [slots.default({ row: this.row })] : []
      );
    }
  },
});
</script>
