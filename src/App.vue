<template>
  <div
    class="first-paint"
  >
    <TopBar />
  </div>
  <div class="content" />
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import TopBar from '@/components/TopBar/index';
</script>
<style scoped lang="scss">
.first-paint {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/src/assets//howl049.jpg');
  background-repeat:no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.content {
  color: black;
  height: 5000px;
}
</style>
