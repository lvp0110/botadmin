<template>
  <CharactersForm
    :initial-values="personality"
    :prop-items-options="propItemsOptions"
    :on-submit="handleSubmit"
  />
</template>

<script setup lang="ts">
import CharactersForm from "../../../../components/personality-form/index.vue";
import { Personality } from "../../../../types/personality";
import { PropItem } from "../../../../types/props";

const personality: Personality = {
  code: "test code",
  name: "test name",
  props: [
    {
      type: { name: "Лексика", type: "lexis" },
      data: { code: "prop 1", name: "prop 1", prompt: "prompt lexis..." },
    },
    {
      type: { name: "Тон", type: "tone" },
      data: { code: "prop 2", name: "prop 2", prompt: "prompt tone..." },
    },
  ],
};

const propItemsOptions: Record<string, PropItem[]> = {
  lexis: [
    { code: "prop 1", name: "prop 1", prompt: "prompt lexis..." },
    { code: "prop 2", name: "prop 2", prompt: "prompt lexis..." },
  ],
  tone: [
    { code: "prop 1", name: "prop 1", prompt: "prompt tone..." },
    { code: "prop 2", name: "prop 2", prompt: "prompt tone..." },
  ],
};

const handleSubmit = (personality: Personality) => {
  console.log(personality);
};
</script>

<style scoped></style>
