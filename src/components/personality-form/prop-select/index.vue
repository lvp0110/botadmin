<template>
  <select v-model="selectModel">
    <option v-for="option in options" :value="option.code">
      {{ option.name + ", " + option.prompt }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { PropItem } from "../../../types/props";
import { ref, watch } from "vue";

const { options, name } = defineProps<{
  name: string;
  options: PropItem[];
}>();

const { value } = useField<PropItem>(() => name);

const selectModel = ref<string>(value.value.code);

watch(value, (value) => {
  selectModel.value = value.code;
});

watch(selectModel, (selectValue) => {
  const selectedOption = options.find(({ code }) => code === selectValue);

  if (selectedOption) {
    value.value = selectedOption;
  }
});
</script>
