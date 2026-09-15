<script setup>
import { ref, onMounted } from 'vue';
import { useEventListener, useRafFn } from '@vueuse/core';
import Timer from './components/Timer.vue';


const palletes = {
  "purpleRaindrops": ["#f72585", "#b5179e", "#7209b7", "#560bad", "#480ca8", "#3a0ca3", "#3f37c9", "#4361ee", "#4895ef", "#4cc9f0"],
  "deepSeaBlue": ["#0466c8", "#0353a4", "#023e7d", "#002855", "#001845", "#001233", "#33415c", "#5c677d", "#7d8597", "#979dac"],
  "fieryRedSunset": ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#ffba08"],
}

function getRandomPalletteEntry(palletes, current) {
  const keys = Object.keys(palletes);
  const remainingKeys = keys.filter((key) => key !== current);
  const pallette = remainingKeys[Math.floor(Math.random() * remainingKeys.length)];
  const colors = palletes[pallette];

  return { pallette, colors };
}


const pallette = ref(getRandomPalletteEntry(palletes));
const size = ref(20);


console.log("Random Color palette ", pallette)
const canvasRef = ref(null);
let ctx;
let colorIndex = 0;
const dots = [];

useEventListener(document, 'keydown', (evt) => {
  if (evt.key === " ") {
    pallette.value = getRandomPalletteEntry(palletes, pallette.value.pallette);
    console.log("New Random Color palette ", pallette)
  }


})

onMounted(() => {
  const canvas = canvasRef.value;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');
});

useEventListener(window, 'resize', () => {
  canvasRef.value.width = window.innerWidth;
  canvasRef.value.height = window.innerHeight;
});

useEventListener(document, 'mousemove', (evt) => {
  dots.push({ x: evt.clientX, y: evt.clientY, color: pallette.value.colors[colorIndex], life: 1 });
  colorIndex = (colorIndex + 1) % pallette.value.colors.length;
});

useEventListener(document, "wheel", (evt) => {
  const { deltaY } = evt;

  if (deltaY < 0) {
    size.value += evt.shiftKey ? 10 : 1;
  } else {
    size.value = Math.max(1, size.value - (evt.shiftKey ? 10 : 1));
  }
})

useEventListener(document, 'keydown', (evt) => {
  if (evt.key.toLowerCase() === 'r') {
    size.value = 20
  }
})

useRafFn(() => {
  if (!ctx) return;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (let i = dots.length - 1; i >= 0; i--) {
    const dot = dots[i];
    dot.life -= 0.01;
    if (dot.life <= 0) {
      dots.splice(i, 1);
      continue;
    }
    ctx.globalAlpha = dot.life;
    ctx.fillStyle = dot.color;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, size.value * dot.life, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
});


const bioList = ["Full Stack Dev","From German"]


</script>

<template>
  <div class="relative h-screen w-screen bg-white  overflow-hidden text-font-name select-none">
    <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none"></canvas>

    <div class="relative h-full flex flex-col items-start justify-center z-10">


      <div class="h-fit ml-10 pl-2 py-4 border-black border-l-2 rounded-s">
        <div class="flex flex-row">
          <h1 class="text-l">Hi im <span class="underline">Dominik</span></h1>
        </div>
        <div class="text-sm" v-for="entry in bioList" >- {{ entry }}</div>

      </div>
    </div>
    <div class="absolute top-5 left-5 m-2 text-lg w-fit z-10">
      <Timer />
    </div>
  </div>
</template>