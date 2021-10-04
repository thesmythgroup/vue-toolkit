<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      :class="{
        'checkbox__input--dirty': dirty,
        'checkbox__input--invalid': invalid,
        'checkbox__input--pristine': pristine,
        'checkbox__input--touched': touched,
        'checkbox__input--untouched': untouched,
        'checkbox__input--valid': valid,
      }"
      v-bind="$attrs"
      :id="id"
      :checked="innerValue"
      @change="handleInput"
      @blur="handleBlur"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  onMounted,
  ref,
  watch,
} from '@vue/composition-api';

import { useFormControl } from '../../composition';
import { FieldSetIdFn } from '../../interfaces';
import { getUniqueId } from '../../utils';

export default defineComponent({
  name: 'v-checkbox',
  inheritAttrs: false,
  props: {
    name: String,
    value: Boolean,
  },
  setup(props, { emit }) {
    const {
      dirty,
      handleBlur,
      handleInput,
      innerValue,
      invalid,
      pristine,
      setValue,
      touched,
      untouched,
      valid,
    } = useFormControl(props.name as string, props.value, emit);

    const id = ref(getUniqueId('control-'));
    const fieldSetId = inject<FieldSetIdFn | null>('field:setId', null);

    watch(() => props.value, setValue);

    if (fieldSetId) {
      onMounted(() => fieldSetId(id.value));
    }

    return {
      dirty,
      handleBlur,
      handleInput,
      id,
      innerValue,
      invalid,
      pristine,
      touched,
      untouched,
      valid,
    };
  },
});
</script>
