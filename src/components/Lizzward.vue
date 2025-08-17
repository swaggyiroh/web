<script setup>
import lizardSound from '@/audio/lizard.mp3'

function playSound() {
  const audio = new Audio(lizardSound)
  audio.play()
}
</script>

<template>
  <div
    class="w-60 h-60 bg-gray-500 rounded-full flex justify-center items-center text-7xl shadow-black shadow-xl"
    @click="playSound"
  >
    <h1>🦎</h1>
  </div>
</template>

<style scoped>
div:active {
  @apply scale-95 shadow-2xl shadow-black;
}
</style>
