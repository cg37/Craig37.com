<template>
  <div class="switch" >
    <img :src="darkIcon" alt="dark">
    <Button @checkBoxValue="checkBoxValue"></Button>
    <img :src="sunIcon" alt="sun">
  </div>
</template>
<script setup lang="ts">
import {useTheme} from '@/components/utils/useTheme';
import Button from "@/components/ThemeSwitch/Button.vue";
import {THEME} from '@/Model/const'
import sunIcon from '@/assets/icon/sun.png';
import darkIcon from '@/assets/icon/dark.png'

const {theme} = useTheme();
const checkBoxValue = (val) => {
  theme.value = val ? THEME.LIGHT : THEME.DARK;
};
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
