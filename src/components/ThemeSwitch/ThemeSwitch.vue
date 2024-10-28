<template>
  <div class="switch" >
    <img :src="darkIcon" alt="dark">
    <Button></Button>
    <img :src="sunIcon" alt="sun">
  </div>
</template>
<script setup lang="ts">
import Button from "@/components/ThemeSwitch/Button.vue";
import sunIcon from '@/assets/icon/sun.png';
import darkIcon from '@/assets/icon/dark.png'

</script>
<style lang="scss" scoped>
.switch {
  display: flex;
}
img {
  width: 30px;
  height: 30px;
  gap: 4px;
  object-fit: contain;
}
</style>
