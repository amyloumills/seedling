<script setup lang="ts">
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

const plantsData = ref([])

const key = import.meta.env.VITE_API_KEY

onMounted(() => {
  axios.get(`https://perenual.com/api/species-list?key=${key}`).then((response) => {
    console.log(response.data.data)

    plantsData.value = response.data.data
  })
})
</script>

<template>
  <h3>Plant List</h3>
  <ul>
    <li v-for="(plant, index) in plantsData" :key="index">
      {{ index + 1 }} {{ plant.common_name }}
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
