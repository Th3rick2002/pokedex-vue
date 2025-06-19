<script setup lang="ts">

</script>

<template>
  <section class="w-full flex-1 flex justify-center items-center bg-gradient-to-br from-blue-50 to-gray-100">
    <div class="w-full min-w-xl max-w-4xl h-96 flex flex-col justify-around p-8 bg-white rounded-2xl shadow-xl border border-gray-200 transform transition-all hover:shadow-2xl hover:-translate-y-1">
      <div class="space-y-4">
        <h2 class="text-4xl font-bold text-gray-800">Proyecto de Parcial - Componentes Web</h2>
        <p class="text-lg text-gray-600">Proyecto hecho en Vue 3 consumiendo la PokeAPI con funcionalidades de búsqueda y filtrado avanzado</p>
      </div>

      <div class="space-y-3">
        <p class="text-xl font-semibold text-gray-700">Tecnologías utilizadas</p>
        <ul class="grid grid-cols-2 gap-2">
          <li class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span class="text-gray-700">Vue 3</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span class="text-gray-700">TypeScript</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span class="text-gray-700">Tailwind CSS</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span class="text-gray-700">PokeAPI</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
