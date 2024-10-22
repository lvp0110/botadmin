<template>
  <CharactersForm
    v-if="personality"
    :initial-values="personality"
    :prop-items-options="{}"
    :on-submit="handleSubmit"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CharactersForm from "../../../../components/personality-form/index.vue";
import { Personality } from "../../../../types/personality";
import { PropItem } from "../../../../types/props";

const route = useRoute();

const props = ref<PropItem[]>([]);
const personality = ref<Personality>();

onMounted(async () => {
  const response = await fetch("http://localhost:3007/admin/personality/props/lexis");

  const json = await response.json();

  console.log(json);

  props.value = json.data;
});

onMounted(async () => {
  const response = await fetch(
    `http://localhost:3007/admin/personality/${route.params.code}`
  );

  const json = await response.json();

  personality.value = json.data;
});

const handleSubmit = (personality: Personality) => {
  console.log(personality);
};
</script>

<style scoped></style>
