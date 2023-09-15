<script setup>
import { onMounted, ref, computed } from 'vue'
import data from './data.json'

const keywords = ref('')

const result = computed(() => {
  return data.filter(item => item.text.toLowerCase().includes(keywords.value.toLocaleLowerCase()))
})
onMounted(() => {
  console.log(data)
})
</script>

<template>
  <main class="p-5">
    <input placeholder="input for search" class="w-full mb-3 input-bordered input" v-model="keywords" type="text">

    <RecycleScroller class="h-[calc(100vh-100px)]" :items="result" :item-size="100" key-field="text" v-slot="{ item }">
      <a class="flex items-center justify-between transition border-gray-300 border-solid group link link-info user hover:bg-gray-200 border-b-1"
        v-clipboard="item.href" :key="item.text">
        <img :src="item.href" :key="item.text" :alt="item.text" class="w-auto h-full p-3 bg-gray-100 rounded-md">
        <span class="absolute left-[50%] group-hover:block hidden text-gray-500"> click to copy image url</span>
        <span class="text-blue-500 text-[30px]">
          {{ item.text }}
        </span>
      </a>
    </RecycleScroller>
  </main>
</template>

<style lang="scss">
.user {
  height: 100px;
  padding: 12px;
  box-sizing: border-box;
}
</style>