<template>
<div class="container">
  Craig's Site
  <div class="theme">
    <p>{{ theme }}</p>
    <ThemeSwitch />
    <p> {{ theme }} 主题</p>
  </div>
</div>
</template>
<script lang="ts" setup>
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.vue';
import { useTheme } from '@/hooks/useTheme';


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
.theme {
  border: 1px solid red
}
</style>
