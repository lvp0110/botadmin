<template>
  <form @submit="submit">
    <label class="label">
      <span>Код</span>
      <input v-model="code" :bind="codeAttributes" />
      <span>{{ errors.code }}</span>
    </label>
    <label class="label">
      <span>Название</span>
      <input v-model="name" :bind="nameAttributes" />
      <span>{{ errors.name }}</span>
    </label>
    <div v-for="(field, index) in fields" :key="field.key">
      <label class="label">
        <span>{{ field.value.type }}</span>
        <PropSelect
          :name="`prop_list[${index}].data`"
          :options="propItemsOptions[field.value.type]"
        />
      </label>
    </div>
    <button type="submit">Сохранить</button>
  </form>
</template>

<script setup lang="ts">
import { defineProps, watch } from "vue";
import { Personality } from "../../types/personality";
import { useForm, useFieldArray } from "vee-validate";
import { PropItem } from "../../types/props";
import PropSelect from "./prop-select/index.vue";

const { initialValues, propItemsOptions, onSubmit } = defineProps<{
  initialValues?: Personality;
  propItemsOptions: Record<string, PropItem[]>;
  onSubmit: (personality: Personality) => void;
}>();

const { defineField, errors, handleSubmit } = useForm({
  initialValues,
  validationSchema: {
    name: (value: string = "") =>
      value.length > 0 ? true : "Обязательное поле",
  },
});

const [code, codeAttributes] = defineField("code");
const [name, nameAttributes] = defineField("name");

const { fields } = useFieldArray<Personality["prop_list"][number]>("prop_list");

const submit = handleSubmit((values) => {
  onSubmit(values);
});
</script>

<style scoped>
.label {
  display: flex;
  flex-direction: column;
}
</style>
