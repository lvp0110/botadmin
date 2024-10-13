<template>
  <AttributeForm initial-name="Test name" :on-submit="onSubmit" />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import AttributeForm from '../../../../components/attribute-form/index.vue'

const router = useRouter();
const route = useRoute();

const onSubmit = (formData: FormData) => {
    const name = formData.get("name");

    console.log(name);
    
    router.push(`/attributes/${route.params.type}`);
};
</script>

<style scoped></style>
