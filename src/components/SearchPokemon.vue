<script setup lang="ts">
import { ref, computed } from 'vue';
import {searchPokemon} from "@/api/pokeapi.service.ts";
import type { Pokemon } from '@/api/interface/pokemon.interface';
import {getBackgroundClass} from "@/constants/typePokemonClass.ts";

const pokemonName = ref('');
const pokemon = ref<Pokemon  | null>(null);
const error = ref('');
const isLoading = ref(false);
const checkPokemon = ref(false);

const isValidPokemonName = computed(() => {
  return pokemonName.value.trim().length > 0;
});

const getPokemon = async () => {
  if (!isValidPokemonName.value) return;

  try {
    isLoading.value = true;
    error.value = '';

    const response = await searchPokemon(pokemonName.value);

    if (!response) {
      throw new Error('Pokémon no encontrado');
    }
    pokemon.value = response
  } catch (e: any) {
    error.value = e.message;
    pokemon.value = null;
  } finally {
    isLoading.value = false;
  }
};

const getShinyPokemon = (pokemon: Pokemon)=>{
  error.value = '';
  if(!pokemon.sprites.front_shiny){
    error.value = 'Este pokemon no tiene version shiny'
    return;
  }

  return pokemon.sprites.front_shiny;
}
</script>

<template>
  <div class="max-w-md mx-auto p-4 w-full h-auto flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold mb-4">Buscador de Pokémon</h1>

    <div class="flex gap-2 mb-6">
      <input
        v-model="pokemonName"
        @keyup.enter="getPokemon"
        placeholder="Escribe un nombre de Pokémon"
        class="flex-1 p-2 border rounded"
      />
      <button
        @click="getPokemon"
        :disabled="!isValidPokemonName || isLoading"
        class="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
      >
        Buscar
      </button>
    </div>

    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>

    <div v-if="isLoading" class="mb-4">Cargando...</div>

    <div v-if="pokemon" class="rounded-lg shadow-md p-4 text-white" :class="[getBackgroundClass(pokemon.types[0].type.name)]">
      <div class="flex items-center gap-4">
        <img
          v-if="!checkPokemon"
          :src="pokemon.sprites.front_default"
          :alt="pokemon.name"
          class="w-24 h-24"
        />
        <img
          v-if="checkPokemon"
          :src="getShinyPokemon(pokemon)"
          :alt="pokemon.name"
          class="w-24 h-24"
        />
        <div>
          <h2 class="text-xl font-bold capitalize">{{ pokemon.name }}</h2>
          <p>Altura: {{ pokemon.height / 10 }} m</p>
          <p>Peso: {{ pokemon.weight / 10 }} kg</p>
        </div>
      </div>

      <div class="mt-4">
        <h3 class="font-semibold">Tipos:</h3>
        <div class="flex gap-2 mt-1">
          <ol>
            <li v-for="type in pokemon.types" :key="type.slot">
               {{ type.type.name }}
            </li>
          </ol>
        </div>
      </div>

      <div class="mt-4 flex">
        <input type="checkbox" v-model="checkPokemon">
        <p>Mostrar shiny</p>
      </div>
    </div>
  </div>
</template>
