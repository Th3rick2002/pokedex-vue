<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<header class="flex justify-between w-full h-20 items-center px-2 bg-amber-400">
  <div class="">
    <h1 class="text-5xl text-white text-shadow ">Pokedex</h1>
  </div>

  <nav class="flex w-2xl justify-between text-white transition-all delay-250 duration-500">
    <RouterLink to="/" class="transition-all delay-0 duration-200 hover:underline hover:text-xl">Inicio</RouterLink>
    <RouterLink to="/search" class="transition-all delay-0 duration-200 hover:underline hover:text-xl">Busqueda de pokemon</RouterLink>
    <RouterLink to="/types" class="transition-all delay-0 duration-200 hover:underline hover:text-xl">Tipo de pokemon</RouterLink>
    <RouterLink to="/random" class="transition-all delay-0 duration-200 hover:underline hover:text-xl">Pokemon aleatorio</RouterLink>
  </nav>
</header>
</template>

<style scoped>

</style>
