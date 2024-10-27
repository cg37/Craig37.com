<template>
  <div class="item switch" :class="theme" @click="theme = theme === 'dark' ? THEME.LIGHT : THEME.DARK">
    <div class="bar"></div>
  </div>
</template>
<script setup lang="ts">
import { useTheme } from '@/components/utils/useTheme';
import { THEME } from '@/Model/const'

const {theme} = useTheme();
</script>
<style lang="scss" scoped>
.switch {
  position: fixed;
  top: 500px;
  left: 700px;
  width: 100px;
  height: 30px;
  border-radius: 999px;
  border: #535bf2 1px solid;
}
</style>
