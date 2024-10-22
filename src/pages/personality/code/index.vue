<template>
  <RouterLink
    :to="`/personality/${route.params.code}/edit`"
    class="btn btn-primary"
    >Редактировать</RouterLink
  >
  <ul v-if="personality">
    <li>{{ personality.code }}</li>
    <li>{{ personality.name }}</li>
    <li>
      <ul>
        <li v-for="prop in personality.prop_list">
          <b>{{ prop.type }} ({{ prop.data.name }})</b>
          <div>{{ prop.data.prompt }}</div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from "vue-router";
import { Personality } from '../../../types/personality';

const route = useRoute();

const personality = ref<Personality>()

onMounted(async () => {
      const response = await fetch(
        `http://localhost:3007/admin/personality/${route.params.code}`
      );
      const json = await response.json();

      console.log(json);
      
      personality.value = json.data
})
</script>

<style scoped></style>
