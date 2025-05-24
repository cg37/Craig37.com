<template>
  <div class="first-paint">
    <TopBar />
    111
  </div>
</template>
<script setup lang="ts">
import TopBar from '@/components/TopBar/index';
</script>
<style scoped lang="scss">
.first-paint {
  position: absolute;
  width: 100%;
  height: 80%;
  background-image: url('/src/assets//howl049.jpg');
  background-repeat:no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  border: 1px solid red;
}
.content {
  color: black;
  height: 5000px;
}
</style>
