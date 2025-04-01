<script setup lang="ts">
import { ref, computed } from "vue";
import Home from "./Home.vue";
import Cool from "./CoolStuff.vue";
import Social from "./Social.vue";
import Idk from "./Idk.vue";

const routes = {
  "/": Home,
  "/cool": Cool,
  "/social": Social,
  "/idk": Idk
};

const navigate = (path: string) => {
  window.location.hash = path;
  currentPath.value = path;
};

const currentPath = ref(window.location.hash.slice(1) || "/");

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash.slice(1) || "/";
});

const currentView = computed(() => {
  return routes[currentPath.value] || Home;
});

</script>

<template>
  <div class="select-none flex justify-center text-white relative">
    <div class="flex gap-5 p-10 text-4xl drop-shadow-2xl font-vt323 ">
      <p>{</p>
      <span @click="navigate('/')" class="nav-item" :class="{ 'active': currentPath === '/' }">home</span>
      <p>}</p>

      <p>{</p>
      <span @click="navigate('/cool')" class="nav-item" :class="{ 'active': currentPath === '/cool' }">coolStuffIMade</span>
      <p>}</p>

      <p>{</p>
      <span @click="navigate('/social')" class="nav-item" :class="{ 'active': currentPath === '/social' }">social</span>
      <p>}</p>

      <p>{</p>
      <span @click="navigate('/idk')" class="nav-item" :class="{ 'active': currentPath === '/idk' }">idk</span>
      <p>}</p>
    </div>
  </div>

  <component :is="currentView" />
</template>

<style scoped>



.nav-item {
  @apply relative cursor-pointer transition duration-200;
}

.nav-item {
  @apply relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out;
}

.nav-item:hover::after {
  @apply scale-x-100;
}

.active::after {
  @apply scale-x-100;
}

</style>
