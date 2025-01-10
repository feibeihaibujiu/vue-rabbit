<script setup lang="ts">
import { RouterView } from 'vue-router';
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import layoutFixed from './components/layoutFixed.vue';
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