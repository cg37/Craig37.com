<template>
<input ref="fileUpLoad" type="file" @change="fileChange"/>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import {cutFile} from '@/utils/cutFile'
const fileUpLoad = ref()
const fileChange = async (e) => {
  const file = e.target.files[0]
  console.time('cutFile')
  const chunks = await cutFile(file);
  console.timeEnd('cutFile')
  console.log(chunks)
}
</script>

<style scoped lang="scss">
</style>