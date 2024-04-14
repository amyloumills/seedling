<script setup lang="ts">
function openDialog() {
  console.log('hello')
}
</script>

<template>
  <h3>Plant List</h3>
  <ul>
    <li><a @click="openDialog">Sweet Basil</a></li>
    <li><a>Chinese Money Plant</a></li>
    <li><a>Monstera</a></li>
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
