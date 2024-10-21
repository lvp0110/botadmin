<template>
    <AttributeForm initial-name="Test name" :on-submit="onSubmit" />
  </template>
  
  <script setup lang="ts">
  import { useRouter, useRoute } from "vue-router";
  import { Attribute } from "../../../../types/attributes";
  import AttributeForm from '../../../../components/attribute-form/index.vue'
  
  const router = useRouter();
  const route = useRoute();
  
  const onSubmit = (attribute: Attribute) => {
      console.log(attribute);
      
      router.push(`/attributes/${route.params.type}`);
  };
  </script>
  
  <style scoped></style>
  