<script setup>
import { useEventListener } from '@vueuse/core';
import Timer from './components/Timer.vue';


const colors = ["#f72585", "#b5179e", "#7209b7", "#560bad", "#480ca8", "#3a0ca3", "#3f37c9", "#4361ee", "#4895ef", "#4cc9f0"]

var color = 0;

useEventListener(document, 'mousemove', (evt) => {
  const { clientX, clientY } = evt;

  const elem = document.createElement('div');
  elem.className = 'absolute w-10 h-10 pointer-events-none rounded-full';
  elem.style.left = `${clientX - 20}px`;
  elem.style.top = `${clientY - 20}px`;
  elem.style.background = colors[color];
  elem.style.zIndex = '1';
  document.body.appendChild(elem);

  color += 1;
  color %= colors.length;

  setTimeout(() => elem.remove(), 300);
});

</script>

<template>
  <div class="h-screen w-screen bg-black text-white overflow-hidden caacupe-one-regular ">

    <div class="h-full flex flex-col items-center justify-center gap-0 z-50">
      <div class="flex flex-row">
        <span class="pt-3 z-50">Hi im </span>
        <h1 class="text-9xl z-50">Dominik</h1>
      </div>
      <h2 class="z-50">Full-Stack Developer from Germany</h2>
    </div>

    <div class="absolute top-5 left-5 m-2 text-lg w-fit z-50">
      <Timer />
    </div>


  </div>

</template>
