<script setup lang="ts">
import { RouterView} from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header/>
    <main class="flex-1 flex bg-gradient-to-br from-blue-50 to-gray-100">
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>

</style>
