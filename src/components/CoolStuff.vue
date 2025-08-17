<script setup lang="ts">
import { ref } from 'vue'
import Terminal from './Terminal.vue'
import Lizzward from './Lizzward.vue'

type DisplayComponent = 'text' | 'terminal' | 'lizzward'

const activeComponent = ref<DisplayComponent>('text')


function toggleComponent(component: DisplayComponent) {
    activeComponent.value = activeComponent.value === component ? 'text' : component
}
</script>

<template>
    <div class="flex justify-center">
        <div
            class="pb-60 flex flex-wrap justify-center items-center font-vt323 text-3xl text-white select-none h-screen w-10/12 gap-20 p-10">

            <div class="rainbow h-fit w-11/12 flex justify-center items-center text-8xl ">
                <h1 v-if="activeComponent === 'text'">WOW OMG</h1>
                <Terminal v-else-if="activeComponent === 'terminal'" />
                <Lizzward v-else-if="activeComponent === 'lizzward'" />
            </div>


            <div class="item" @click="toggleComponent('terminal')">
                <h1>Terminal</h1>
            </div>

            <div class="item" @click="toggleComponent('lizzward')">
                <h1>🦎</h1>
            </div>

            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
</template>




<style lang="css" scoped>
.item {
    @apply h-40 w-3/12 bg-gray-900 text-5xl flex justify-center items-center rounded-md transition-transform duration-300;
}

.item:hover {
    @apply scale-125;
}

.rainbow {
    animation: rainbow 2.5s linear infinite;
}

@keyframes rainbow {

    0%,
    100% {
        color: rgb(255, 0, 0);
    }

    8% {
        color: rgb(255, 127, 0);
    }

    16% {
        color: rgb(255, 255, 0);
    }

    25% {
        color: rgb(127, 255, 0);
    }

    33% {
        color: rgb(0, 255, 0);
    }

    41% {
        color: rgb(0, 255, 127);
    }

    50% {
        color: rgb(0, 255, 255);
    }

    58% {
        color: rgb(0, 127, 255);
    }

    66% {
        color: rgb(0, 0, 255);
    }

    75% {
        color: rgb(127, 0, 255);
    }

    83% {
        color: rgb(255, 0, 255);
    }

    91% {
        color: rgb(255, 0, 127);
    }
}
</style>
