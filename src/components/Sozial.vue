<script setup lang="ts">
import { ref } from 'vue';

// Define the URLs for each platform
const twitter = 'https://x.com/swaggyiroh';
const github = 'https://github.com/swaggyiroh';
const spotify = 'https://open.spotify.com/user/dodom2002';
const steam = 'https://steamcommunity.com/id/dodom2002';

// Define the Discord handle or ID that you want to copy
const discordHandle = 'swaggyiroh';

// Define the faCopy method
const faCopy = async (text: string) => {
  try {
    // Use the Clipboard API to write the text to the clipboard
    await navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`); // Show a success message (can be customized)
  } catch (err) {
    console.error('Failed to copy: ', err);
    alert('Failed to copy!'); // Show an error message if the copy failed
  }
};
</script>

<template>
  <div class="pb-60 flex gap-10 justify-center items-center font-vt323 text-3xl text-white select-none h-screen">
    <!-- Twitter Link -->
    <a :href="twitter" target="_blank" class="hover:text-blue-500">
      <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
    </a>

    <!-- GitHub Link -->
    <a :href="github" target="_blank" class="hover:text-gray-700">
      <font-awesome-icon :icon="['fab', 'github']" size="2x" />
    </a>

    <!-- Discord Link (with copy functionality) -->
    <a @click="faCopy(discordHandle)" class="hover:text-indigo-500">
      <font-awesome-icon :icon="['fab', 'discord']" size="2x" />
    </a>

    <!-- Spotify Link -->
    <a :href="spotify" target="_blank" class="hover:text-green-500">
      <font-awesome-icon :icon="['fab', 'spotify']" size="2x" />
    </a>

    <!-- Steam Link -->
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
