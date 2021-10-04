<template>
  <textarea
    class="textarea"
    :class="{
      'textarea--dirty': dirty,
      'textarea--invalid': invalid,
      'textarea--pristine': pristine,
      'textarea--touched': touched,
      'textarea--untouched': untouched,
      'textarea--valid': valid,
    }"
    :id="id"
    :value="innerValue"
    @input="handleInput"
    @blur="handleBlur"
  ></textarea>
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
  name: 'v-textarea',
  props: {
    name: String,
    value: String,
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
