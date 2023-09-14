<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const linkElements = document.querySelectorAll('img');

  // 创建一个空数组来存储链接数据
  const linkData = [];

  // 遍历每个<a>元素并提取链接和文本
  linkElements.forEach((linkElement) => {
    const href = linkElement.getAttribute('src');
    const text = linkElement.getAttribute('alt');

    // 将链接和文本添加到数组中
    linkData.push({ href, text });
  });

  console.log('%c [ linkData ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', linkData)
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
