<script setup>
import { onMounted } from 'vue'
import data from './data.json'
onMounted(() => {
  console.log(data)
})
</script>

<template>
  <main>
    <ul id="list">
      <li v-for="(i, index) in data" :key="index"><a :href="i.link"><img :src="i.link" alt="3cx" height="50"></a>
      </li>

    </ul>
  </main>
</template>
