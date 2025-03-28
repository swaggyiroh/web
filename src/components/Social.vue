<script setup lang="ts">
import { ref } from 'vue';

const twitter = 'https://x.com/swaggyiroh';
const github = 'https://github.com/swaggyiroh';
const spotify = 'https://open.spotify.com/user/dodom2002';
const steam = 'https://steamcommunity.com/id/dodom2002';
const discord = 'https://discord.com/users/284979744372424715'


</script>

<template>
  <div class="pb-60 flex gap-10 justify-center items-center font-vt323 text-3xl text-white select-none h-screen">
    <a :href="twitter" target="_blank" class="hover:text-blue-500">
      <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
    </a>

    <a :href="github" target="_blank" class="hover:text-gray-700">
      <font-awesome-icon :icon="['fab', 'github']" size="2x" />
    </a>

    <a :href="discord" target="_blank" class="hover:text-indigo-500">
      <font-awesome-icon :icon="['fab', 'discord']" size="2x" />
    </a>

    <a :href="spotify" target="_blank" class="hover:text-green-500">
      <font-awesome-icon :icon="['fab', 'spotify']" size="2x" />
    </a>

    <a :href="steam" target="_blank" class="hover:text-cyan-800">
      <font-awesome-icon :icon="['fab', 'steam']" size="2x" />
    </a>
  </div>
</template>

<style scoped>
a {
  @apply hover:scale-110;
}
</style>
