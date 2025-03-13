<script setup>
import Name from '@/components/Name.vue';
import Items from '@/components/Items.vue';
import Timer from '@/components/Timer.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const bg = ref(60);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    bg.value = (bg.value + 1) % 360; 
  }, 50);
});

const dynamicBackground = computed(() => {
  return `linear-gradient(${bg.value}deg, hsl(${bg.value}, 80%, 40%) 0%, hsl(${(bg.value + 180) % 360}, 80%, 20%) 100%)`;
});

</script>

<template>
  <Timer class="text-xl pl-2" />
  <div 
    class="flex flex-col min-h-screen justify-center items-center transition-colors duration-500"
    :style="{ background: dynamicBackground }"
  >
    <Name name="Dominik" color="text-white" />
    <Items />
  </div>
</template>
