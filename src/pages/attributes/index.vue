<template>
    <ul>
      <li v-for="attributeType in Object.values(AttributeType)">
        <RouterLink
          :to="`/attributes/${attributeType}`"
        >
          {{ AttributeTypeNames[attributeType] }}
        </RouterLink>
      </li>
    </ul>
</template>

<script setup lang="ts">
import { AttributeType, AttributeTypeNames } from "../../types/attributes";
</script>

<style scoped>

</style>
