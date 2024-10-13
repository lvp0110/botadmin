<template>
  <RouterLink class="btn" :to="`/attributes/${route.params.type}/new`"> Добавить атрибут </RouterLink>
  <ul>
    <li v-for="attribute in attributes">
      <RouterLink :to="`/attributes/${route.params.type}/${attribute.code}`">
        {{ attribute.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { Attribute } from "../../../types/attributes";

const route = useRoute();

const attributes: Attribute[] = [
  { code: "test attribute 1", name: "Тестовый атрибут 1" },
  { code: "test attribute 2", name: "Тестовый атрибут 2" },
  { code: "test attribute 3", name: "Тестовый атрибут 3" },
];
</script>

<style scoped></style>
