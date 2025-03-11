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
  
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

onMounted(() => {
  startTimer();
});

</script>


<template>
    <div>
      <div id="timer" class="text-l6/7 font-doto text-white absolute pt-2 pl-2 select-none">
        {{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}
      </div>
    </div>
</template>
  