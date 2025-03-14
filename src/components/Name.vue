<script setup>

import { defineProps } from 'vue';

defineProps({
    name: {
        type: String,
        default: 'Name'
    },
    color: {
        type: String,
        default: 'text-black'
    }
});

</script>



<template>

    <h1 :class="[color, 'text-8xl', 'font-bold', 'font-zendots', 'inline-block','select-none','shadow-2xl']">
        {{ name }}
    </h1>

</template>
