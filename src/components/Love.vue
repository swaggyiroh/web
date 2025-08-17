<script setup>
import { ref } from "vue";

const noButtonTransform = ref("");
const yesButtonScale = ref(1);

function moveNoButton() {
    const x = Math.floor(Math.random() * 500);
    const y = Math.floor(Math.random() * 200);
    noButtonTransform.value = `translate(${x}px, ${y}px)`;
    yesButtonScale.value *= 1.2;
}
const coolean = ref(true);

function sayYes() {
    coolean.value = false;
}


</script>

<template>

    <div class="h-[45rem] w-screen bg-white flex items-center justify-center flex-col overflow-hidden">
        <div v-if="coolean" class="flex items-center justify-center flex-col">

            <img src="https://gifdb.com/images/high/cute-love-swirl-around-cat-9c27zdppmrnmzx4c.gif"
                class="w-60 h-60" />
            <div class="text-black text-5xl font-serif flex gap-5 flex-col items-center">
                <h1>Wanna be my Valentine?</h1>
                <div class="flex flex-row text-4xl gap-20">

                    <button class="bg-green-500 px-6 py-2 rounded-lg relative z-10"
                        :style="{ transform: `scale(${yesButtonScale})`, transition: 'transform 0.3s ease' }"
                        @click="sayYes">
                        Yes
                    </button>

                    <button class="bg-red-600 px-6 py-2 rounded-lg relative z-0"
                        :style="{ transform: noButtonTransform, transition: 'transform 0.2s ease' }"
                        @mouseover="moveNoButton">
                        No
                    </button>

                </div>
            </div>
        </div>
        <div v-else class="flex justify-center items-center flex-col">
            <img src="https://i.pinimg.com/originals/2f/82/bb/2f82bb5524663e046922d08a1cdb2ddd.gif">
            <h1>YAAY</h1>
        </div>
    </div>



</template>
