<template>
    <ul>
      <li v-for="assistant in assistants">
        <RouterLink :to="`/assistants/${assistant.code}`">
          {{ assistant.name }}
        </RouterLink>
      </li>
    </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { baseApiUrl } from '../../config';
import { Assistant } from '../../types/assistant';
import { Response } from '../../types/response';

const assistants = ref<Assistant[]>([]);

onMounted(async () => {
  const response = await fetch(`${baseApiUrl}/admin/assistants`);
  const data: Response<Assistant[]> = await response.json();

  assistants.value = data.data;
});
</script>

<style scoped>

</style>
