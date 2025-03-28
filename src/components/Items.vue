<script setup>

const twitter = 'https://x.com/swaggyiroh';
const github = 'https://github.com/swaggyiroh';
const spotify = 'https://open.spotify.com/user/dodom2002';
const steam = 'https://steamcommunity.com/id/dodom2002';

</script>

<template>

    <div class="pt-3 flex flex-row gap-5 justify-center items-center">

        <a :href="twitter" class="hover:text-blue-500">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
        </a>

        <a :href="github" class="hover:text-black">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
        </a>

        <a @click="faCopy(swaggyiroh)" class="hover:text-indigo-500">
            <font-awesome-icon :icon="['fab', 'discord']" size="2x" />
        </a>

        <a :href="spotify" class="hover:text-green-500">
            <font-awesome-icon :icon="['fab', 'spotify']" size="2x" />
        </a>

        <a :href="steam" class="hover:text-slate-700">
            <font-awesome-icon :icon="['fab', 'steam']" size="2x" />
        </a>

    </div>

</template>

<style>

a {
    color: white;
}

a:hover {
    transform: scale(1.2);
}

</style>