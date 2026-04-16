<template>
  <div class="product">
    <h1>Товар: {{ id }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>
