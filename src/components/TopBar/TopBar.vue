<template>
<div class="container item">
  Craig Site
  <div class="theme-switch">
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
  position: fixed;
  top: 0;

}
.theme-switch {
  position: absolute;
  top: 30px;
  right: 50px;
}
</style>

