<script lang="ts">
import Vue, { VNode } from 'vue';

export default Vue.extend({
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
    const col = this.column as VNode;
    const slots = col.data?.scopedSlots;

    return h(
      'td',
      { class: 'table__cell' },
      slots?.default ? [slots.default({ row: this.row })] : []
    );
  },
});
</script>
