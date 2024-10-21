<template>
    <RouterLink :to="`/characters/${route.params.code}/edit`" class="btn btn-primary">Редактировать</RouterLink>
    {{ route.params.code }}
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
