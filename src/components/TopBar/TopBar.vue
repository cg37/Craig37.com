<template>
  <div 
    class="container" 
    :style="{height: `${currentHeight}px`, background: `rgba(31, 49, 68, ${bgOpacity})`}"
  >
    <div class="blog-title">
      Craig37
    </div>
    <div class="menu-tab">
      111
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const originalHeight = 76;  // 原始高度
const minHeight = 60;        // 最小高度
const threshold = 200;       // 滚动超过 100px 后才开始变化
const currentHeight = ref(originalHeight);

const bgOpacity = computed(() => {
  // 如果高度 >= 原始高度，透明度 0（完全透明）
  if (currentHeight.value >= originalHeight) return 0;
  
  // 如果高度 <= 最小高度，透明度 1（纯黑）
  if (currentHeight.value <= minHeight) return 1;
  
  // 线性计算透明度（从 0 → 1）
  return 1 - (currentHeight.value - minHeight) / (originalHeight - minHeight);
});

const handleScroll = () => {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY <= threshold) {
    // 如果滚动距离 <= threshold，保持原始高度
    currentHeight.value = originalHeight;
  } else {
    // 超过 threshold 后，高度随滚动距离减小
    const shrinkAmount = scrollY - threshold; // 计算超出阈值后的滚动距离
    currentHeight.value = Math.max(
      originalHeight - shrinkAmount * 0.1, // 调整 0.5 控制收缩速度
      minHeight
    );
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  background-color: transparent;
  color: black;
  border-bottom: 0px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  box-shadow: 0 8px 8px -8px rgba($color: #000000, $alpha: 0.3);
  .blog-title {
    color: white;
    font-size: 24px;
    font-weight: 900;
  }
}
</style>