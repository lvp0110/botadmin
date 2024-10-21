<template>
  <RouterLink to="/personality/new" class="btn btn-primary"
    >Добавить характер</RouterLink
  >
  <ul>
    <li v-for="character in personalities">
      <RouterLink :to="`/personality/${character.name}`">{{
        character.name
      }}</RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PersonalityFormData } from "../../types/personality";

const personalities: PersonalityFormData[] = [
  {
    name: "characher 1",
  },
  {
    name: "characher 2",
  },
  {
    name: "characher 3",
  },
  {
    name: "characher 4",
  },
];
</script>

<style scoped></style>
