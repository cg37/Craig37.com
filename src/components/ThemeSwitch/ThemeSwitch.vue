<template>
  <div class="switch" :class="theme" @click="theme = theme === 'dark' ? 'light' : 'dark'">
    <div class="bar"></div>
  </div>
</template>
<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';
const {theme} = useTheme();
</script>
