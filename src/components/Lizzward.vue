<script setup>
function playSound() {
  const sound = new Audio('/src/audio/lizard.mp3')
  sound.play()
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
  @apply scale-95 shadow-2xl shadow-black ;
}
</style>
