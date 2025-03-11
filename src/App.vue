<script setup>
  import Name from '@/components/Name.vue';
  import Items from '@/components/Items.vue'
  import Timer from '@/components/Timer.vue'
</script>

<template>

  <Timer />
  <div class="flex flex-col min-h-screen justify-center items-center">
    <Name name="Dominik" text="text-white" />
    <Items />
  </div>

</template>

<style>

body{
  background-color: black;
}

</style>

