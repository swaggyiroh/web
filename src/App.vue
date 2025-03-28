<script setup>

import Header from '@/components/Header.vue'
import Home from '@/components/Home.vue'
import Timer from '@/components/Timer.vue'



</script>

<template>
  <Timer />
  
  <div class="h-screen flex flex-col">
    
    <Header />

  </div>

</template>


<style scoped>
:global(body) {
    @apply bg-gray-800
}
</style>