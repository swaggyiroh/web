<script setup>

import { useBackgroundGradient } from '@/assets/background.js';

import Items from '@/components/Items.vue';
import Timer from '@/components/Timer.vue';
import Snow from '@/components/Snow.vue';
import Stars from '@/components/Stars.vue'

const { dynamicBackground } = useBackgroundGradient();

const year = new Date().getFullYear().toString();
const snowy = new Date() > new Date(`Dec 1, ${year}`) || new Date() < new Date(`Jan 3, ${year}`);


</script>



<template>
  <Stars />
  <Snow v-if="snowy"/>

  <Timer class="text-xl pl-2" />
  
  <div class="flex flex-col min-h-screen justify-center items-center transition-colors duration-500"
    :style="{ background: dynamicBackground }">
    
    <h1 class="text-white text-8xl font-bold font-zendots inline-block select-none drop-shadow-2xl">
        Dominik<a class="blink">_</a>
    </h1>
    <Items />
</div>


</template>


<style>

.blink{
  animation: blink 1.5s steps(2) infinite;
  color: white;
}

@keyframes blink{
  0% {
    opacity: 0;
  }
}

.typewriter{
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;

}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {

}


</style>