<template>
  <CharactersForm :on-submit="handleSubmit" />
</template>

<script setup lang="ts">
import CharactersForm from "../../../../components/personality-form/index.vue";
import { Personality } from "../../../../types/personality";

const handleSubmit = (personality: Personality) => {
  console.log(personality);
};
</script>

<style scoped></style>
