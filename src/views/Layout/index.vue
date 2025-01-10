<script setup lang="ts">
import { RouterView } from 'vue-router';
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import layoutFixed from './components/layoutFixed.vue';
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category'
//触发pinia动作获取分类导航
const categoryStore = useCategoryStore()
onMounted( () => {
  categoryStore.getCategory()
})
</script>
  
<template>
  <layoutFixed />
  <LayoutNav /> 
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<style scoped>

</style>