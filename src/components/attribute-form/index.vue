<template>
  <form @submit="submit">
    <label>
      <span>Название:</span>
      <input v-model="name" :bind="nameAttributes" />
      <span>{{ errors.name }}</span>
    </label>
    <button type="submit">Сохранить</button>
  </form>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useForm } from "vee-validate";
import { Attribute } from "../../types/attributes";

const { initialValues, onSubmit } = defineProps<{
  initialValues?: Attribute;
  onSubmit: (attribute: Attribute) => void;
}>();

const { defineField, errors, handleSubmit } = useForm({
  initialValues,
  validationSchema: {
    name: (value: string = "") =>
      value.length > 0 ? true : "Обязательное поле",
  },
});

const [name, nameAttributes] = defineField("name");

const submit = handleSubmit((values) => {
  onSubmit(values);
});
</script>

<style scoped></style>
