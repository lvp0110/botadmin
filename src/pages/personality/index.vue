<template>
  <RouterLink to="/personality/new" class="btn btn-primary"
    >Добавить характер</RouterLink
  >
  <ul>
    <li v-for="personality in personalities">
      <RouterLink :to="`/personality/${personality.code}`">{{
        personality.name
      }}</RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { PersonalityPreview, PersonalityPreviewResponse } from "../../types/personality";

const personalities = ref<PersonalityPreview[]>([])

onMounted(async () => {
      const response = await fetch(
        `http://localhost:3007/admin/personality`
      );
      const json: PersonalityPreviewResponse = await response.json();

      personalities.value = json.data.items
})
</script>

<style scoped></style>
