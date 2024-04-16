<script setup lang="ts">
import { useFetchPlants } from '../components/hooks/useFetchPlants'

const { plantsData } = useFetchPlants(import.meta.env.VITE_API_KEY)
</script>

<template>
  <h3>Plant List</h3>
  <ul>
    <li v-for="plant in plantsData" :key="plant.id">
      {{ plant.common_name }}
    </li>
  </ul>
</template>

<style scoped>
h3 {
  color: #9ccc65;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 200;
}
li {
  list-style-type: none;
}
</style>
