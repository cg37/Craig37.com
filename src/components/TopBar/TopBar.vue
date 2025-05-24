<template>
  <div 
    class="container" 
    :style="{height: `${currentHeight}px`, background: `rgba(31, 49, 68, ${bgOpacity})`}"
  >
    <div class="blog-title">
      Craig37
    </div>
    <div class="menu-container">
      <div class="menu-item">
        <div class="menu-title">首页</div>
        <HomeIcon class="home icon"/>
      </div>
      <div class="menu-item">
        <div class="menu-title">分类</div>
        <GroupIcon class="group icon" />
      </div>
      <div class="menu-item">
        <div class="menu-title" @click="">关于</div>
        <ProfileIcon class="icon profile"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ProfileIcon from '@/assets/icon/user-solid.svg'
import GroupIcon from '@/assets/icon/group-solid.svg'
import HomeIcon from '@/assets/icon/home-solid.svg'

const originalHeight = 76;  // 原始高度
const minHeight = 60;        // 最小高度
const threshold = 50;       // 滚动超过 100px 后才开始变化
const currentHeight = ref(originalHeight);

const bgOpacity = computed(() => {
  if (currentHeight.value >= originalHeight) return 0;
  if (currentHeight.value <= minHeight) return 1;
  return 1 - (currentHeight.value - minHeight) / (originalHeight - minHeight);
});

const handleScroll = () => {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY <= threshold) {
    currentHeight.value = originalHeight;
  } else {
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
  padding: 0 29%;
  box-shadow: 0 8px 8px -8px rgba($color: #000000, $alpha: 0.3);
  .blog-title {
    color: white;
    font-size: 24px;
    font-weight: 900;
  }
  .menu-container {
    display: flex;
    gap: 24px;
    .menu-item {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      color: white;
      transition: all .3s;
      &:hover{
        transition: all .3s;
        color: #1E3E62;
        .icon {
        transition: all .3s;
          fill: #1E3E62
        }
      }
      .menu-title {
        width: fit-content;
        font-size: 22px;
        white-space: nowrap;
        user-select: none;
      }
      .icon {
        transition: all .3s;
        fill: white;
        height: 20px;
      }
    }
  }
}
</style>