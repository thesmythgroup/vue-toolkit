<script lang="ts">
import { defineComponent } from '@vue/composition-api';

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
  render(h) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const col = this.column as any; // VNode
    const slots = col.data?.scopedSlots;

    return h(
      'td',
      { class: 'table__cell' },
      slots?.default ? [slots.default({ row: this.row })] : []
    );
  },
});
</script>
