<template>
  <form @submit.prevent="handleSubmit">
    <input name="name" v-model="attributeName" />
    <button type="submit">Сохранить</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const { initialName, onSubmit } = defineProps<{
  initialName: string;
  onSubmit: (formData: FormData) => void;
}>();

const attributeName = ref(initialName);

const handleSubmit = (event: Event) => {
  if (event.target instanceof HTMLFormElement) {
    const formData = new FormData(event.target);

    onSubmit(formData);
  }
};
</script>

<style scoped></style>
