<template>
  <label for="toggle">
  <input type="checkbox" id="toggle" v-model="checkboxValue">
    <span></span>
  </label>
</template>
<script lang="ts" setup>
import {useTheme} from '@/utils/useTheme';
import {THEME} from "@/Model/const";
import {ref, watchEffect} from "vue";

const {theme} = useTheme();
const checkboxValue = ref<boolean>(theme.value === THEME.LIGHT)
watchEffect(() => {
  theme.value = checkboxValue.value ? THEME.LIGHT : THEME.DARK
})
</script>
<style lang="scss" scoped>
$__button-height: 30px;
$__toggle-diameter: 24px;
$__button-width: 50px;
$__button-toggle-offset: ($__button-height - $__toggle-diameter) / 2;
$__toggle-shadow-offset: 3px;
$__toggle-wider:33px;
$__color-grey: #39393D;
$__color-dark-grey: #E9e9e9;
//$__color-green:#30D158;
//暗夜模式
$__bg-color-dark:#E9e9e9;

label{
}
span {
  display: inline-block;
  width: $__button-width;
  height: $__button-height;
  background-color: $__color-grey;
  border-radius: $__button-height / 2;
  position: relative;
  &::after{
    content: '';
    display: inline-block;
    width: $__toggle-diameter;
    height: $__toggle-diameter;
    background-color: #fff;
    border-radius: $__toggle-diameter / 2;
    position: absolute;
    top: $__button-toggle-offset;
    transform: translateX($__button-toggle-offset);
    box-shadow: $__toggle-shadow-offset 0 $__toggle-shadow-offset * 4 rgba(0,0,0,.1);
    transition: .3s all ease-in-out;
  }
}
input[type="checkbox"]:checked + span {
  background-color: $__bg-color-dark;
  &::after {
    transform: translateX($__button-width - $__toggle-diameter - $__button-toggle-offset);
    box-shadow: -$__toggle-shadow-offset 0 $__toggle-shadow-offset * 4 rgba(0,0,0,.1);
  }
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"]:active + span::after {
  width: $__toggle-wider;
}
input[type="checkbox"]:checked:active + span::after {
  transform: translateX($__button-width - $__toggle-wider - $__button-toggle-offset);
}
</style>