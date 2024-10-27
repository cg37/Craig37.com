<template>
<div class="container">
  Craig's Site
  <div class="theme">
    <p>{{ theme }}</p>
    <ThemeSwitch />
  </div>
</div>
</template>
<script lang="ts" setup>
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.vue';
import { useTheme } from '@/components/utils/useTheme';


const {theme} = useTheme();
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  background-color: white;
  color: black
}
</style>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.theme {
  width: 100px;
  height: 60px;
  border: 1px solid red;
  display: flex;
}
</style>
