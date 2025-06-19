<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
    <header class="sticky top-0 z-50 flex justify-between items-center w-full h-20 px-6 bg-amber-400 shadow-md">
      <div class="flex items-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Pokedex</h1>
      </div>

      <nav class="hidden md:flex space-x-6 text-white">
        <RouterLink
          to="/"
          class="text-lg font-medium px-3 py-1 rounded-md transition-all duration-200
               hover:bg-amber-500 hover:shadow-sm active:bg-amber-600
               flex items-center"
          active-class="bg-amber-600 shadow-inner">
          Inicio
        </RouterLink>
        <RouterLink
          to="/search"
          class="text-lg font-medium px-3 py-1 rounded-md transition-all duration-200
               hover:bg-amber-500 hover:shadow-sm active:bg-amber-600
               flex items-center"
          active-class="bg-amber-600 shadow-inner">
          Búsqueda
        </RouterLink>
        <RouterLink
          to="/types"
          class="text-lg font-medium px-3 py-1 rounded-md transition-all duration-200
               hover:bg-amber-500 hover:shadow-sm active:bg-amber-600
               flex items-center"
          active-class="bg-amber-600 shadow-inner">
          Tipos
        </RouterLink>
        <RouterLink
          to="/random"
          class="text-lg font-medium px-3 py-1 rounded-md transition-all duration-200
               hover:bg-amber-500 hover:shadow-sm active:bg-amber-600
               flex items-center"
          active-class="bg-amber-600 shadow-inner">
          Aleatorio
        </RouterLink>
      </nav>

      <!-- Menú móvil (hamburguesa) -->
      <div class="md:hidden relative">
        <button @click="isMenuOpen = !isMenuOpen" class="text-white focus:outline-none cursor-pointer">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div v-if="isMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <RouterLink
            to="/"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100"
            @click="closeMenu">
            Inicio
          </RouterLink>
          <RouterLink
            to="/search"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100"
            @click="closeMenu">
            Búsqueda
          </RouterLink>
          <RouterLink
            to="/types"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100"
            @click="closeMenu">
            Tipos
          </RouterLink>
          <RouterLink
            to="/random"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100"
            @click="closeMenu">
            Aleatorio
          </RouterLink>
        </div>
      </div>
    </header>
</template>

<style scoped>

</style>
