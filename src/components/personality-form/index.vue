<template>
  <form @submit="submit">
    <label class="label">
      <span>Название</span>
      <input v-model="name" :bind="nameAttributes" />
      <span>{{ errors.name }}</span>
    </label>
    <label class="label">
      <span>{{ AttributeTypeNames.lexis }}</span>
      <select v-model="lexis" :bind="lexisAttributes">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </label>
    <Field name="grammar.Name" as="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </Field>
    <button type="submit">Сохранить</button>
  </form>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { AttributeTypeNames } from "../../types/attributes";
import { Personality } from "../../types/personality";
import { useForm, Field } from "vee-validate";

const { initialValues, onSubmit } = defineProps<{
  initialValues?: Personality;
  onSubmit: (personality: Personality) => void;
}>();

const { defineField, errors, handleSubmit } = useForm({
  initialValues,
  validationSchema: {
    name: (value: string = "") =>
      value.length > 0 ? true : "Обязательное поле",
  },
});

const [name, nameAttributes] = defineField("name");
const [lexis, lexisAttributes] = defineField("lexis.Name");

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
