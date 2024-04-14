<script setup lang="ts">
import PlantList from './components/PlantList.vue'
</script>

<template>
  <h1>Welcome to Seedling 🌱</h1>
  <p>Identify and add your plants</p>
  <PlantList />
</template>

<style scoped>
h1 {
  color: #9ccc65;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 200;
}
p {
  font-weight: 200;
}
</style>
