<script setup>

import { defineProps } from 'vue';

defineProps({
    name: {
        type: String,
        default: 'Name'
    },
    text: {
        type: String,
        default: 'text-black'
    }
});

</script>



<template>

    <h1 :class="[text, 'text-6xl', 'font-bold', 'font-zendots', 'inline-block','select-none']">
        {{ name }}
    </h1>

</template>
