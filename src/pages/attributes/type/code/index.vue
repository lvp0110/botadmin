<template>
  <AttributeForm :initial-values="{ code: '123', name: 'test' }" :on-submit="onSubmit" />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import AttributeForm from "../../../../components/attribute-form/index.vue";
import { Attribute } from "../../../../types/attributes";

const router = useRouter();
const route = useRoute();

const onSubmit = (attribute: Attribute) => {
  console.log(attribute);

  router.push(`/attributes/${route.params.type}`);
};
</script>

<style scoped></style>
