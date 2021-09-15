<template>
  <div class="radio-group" role="radiogroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

import { formControl } from '../../mixins';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-radio-group',
  mixins: [formControl],
  props: {
    name: {
      type: String,
      default: getUniqueId('radio-group-'),
    },
    value: [String, Number],
  },
  data() {
    return {
      innerValue: this.value,
    };
  },
  methods: {
    onChange(value: string | number) {
      this.innerValue = value;
      this.$emit('input', value);
    },
  },
  watch: {
    value(value: string | number) {
      this.innerValue = value;
    },
  },
});
</script>
