<script setup>
import { ref, onMounted } from 'vue';
import { useEventListener, useRafFn } from '@vueuse/core';
import Timer from './components/Timer.vue';

const colors = ["#f72585", "#b5179e", "#7209b7", "#560bad", "#480ca8", "#3a0ca3", "#3f37c9", "#4361ee", "#4895ef", "#4cc9f0"];

const canvasRef = ref(null);
let ctx;
let colorIndex = 0;
const dots = [];

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
  dots.push({ x: evt.clientX, y: evt.clientY, color: colors[colorIndex], life: 1 });
  colorIndex = (colorIndex + 1) % colors.length;
});

useRafFn(() => {
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
    ctx.arc(dot.x, dot.y, 20 * dot.life, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
});


</script>

<template>
<div class="relative h-screen w-screen bg-black text-white overflow-hidden caacupe-one-regular select-none">
  <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none"></canvas>

  <div class="relative z-10 h-full flex flex-col items-center justify-center gap-0">
    <div class="flex flex-row">
      <span class="pt-3">Hi im </span>
      <h1 class="text-9xl">Dominik</h1>
    </div>
    <h2>Full-Stack Developer from Germany</h2>
  </div>

  <div class="absolute top-5 left-5 m-2 text-lg w-fit z-10">
    <Timer />
  </div>
</div></template>