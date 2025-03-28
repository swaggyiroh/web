<script setup>

import { ref, onMounted } from 'vue';

const days = ref();
const hours = ref();
const minutes = ref();
const seconds = ref();

const startTimer = () => {
  const year = new Date().getFullYear();
  let targetYear = year;
  
  if (new Date() > new Date(`Sep 24, ${year}`)) 
    targetYear += 1;
  
  
  const countDownDate = new Date(`Sep 24, ${targetYear}`).getTime();
  
  setInterval(() => {
    updateTimer(countDownDate);
  }, 1000);
};

const updateTimer = (countDownDate) => {
  const nowInMs = new Date().getTime();
  const distance = countDownDate - nowInMs;

  days.value = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  hours.value = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  minutes.value = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  seconds.value = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
};


onMounted(() => {
  startTimer();
});

</script>


<template>
    <div>
      <div id="timer" class="text-3xl font-vt323 text-white absolute p-10 select-none">
        {{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}
      </div>
    </div>
</template>
  