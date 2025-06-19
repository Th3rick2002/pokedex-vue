<script setup lang="ts">
import { ref } from 'vue';
import {getBackgroundClass} from "@/constants/typePokemonClass.ts";
import type { Pokemon } from '@/api/interface/pokemon.interface';
import {filterPokemon} from "@/api/pokeapi.service.ts";

const availableTypes = ["normal", "fighting", "flying", "poison", "ground", "rock",
  "bug", "ghost", "steel", "fire", "water", "grass", "electric",
  "psychic", "ice", "dragon", "dark", "fairy"];
const selectedType = ref('');
const pokemons = ref<Pokemon[]>([]);
const error = ref('');
const isLoading = ref(false);

const getPokemonByType = async () => {
  if (!selectedType.value) return;

  try {
    isLoading.value = true;
    error.value = '';
    pokemons.value = [];

    const pokemonDetails = await filterPokemon(selectedType.value);
    pokemons.value = pokemonDetails
  } catch (err: any) {
    if (err.response && err.response.status === 404) {
      console.error(err)
      error.value = `Pokémons de tipo ${selectedType.value} no encontrado`;
    } else {
      console.error(err)
      error.value = 'Ocurrió un error al buscar los Pokémon';
    }
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
  <div class="mx-auto p-4 w-full h-auto flex flex-col justify-start items-center">
    <h1 class="text-2xl font-bold mb-4">Buscador de Pokémon por tipo</h1>

    <div class="flex gap-2 mb-6 w-auto">
      <select
        v-model="selectedType"
        @change="getPokemonByType"
        class="flex-1 p-2 border rounded"
      >
        <option value="" disabled selected>Selecciona un tipo</option>
        <option v-for="type in availableTypes" :key="type" :value="type">
          {{ type.charAt(0).toUpperCase() + type.slice(1) }}
        </option>
      </select>
    </div>

    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>

    <div v-if="isLoading" class="mb-4">Cargando...</div>

    <div class="w-full h-auto">
      <div v-if="pokemons.length > 0" class="w-full  space-y-4 grid grid-cols-5 gap-3">
        <div
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          class="rounded-lg border border-gray-700 overflow-hidden flex"
        >
          <div :class="[getBackgroundClass(pokemon.types[0].type.name), 'w-auto flex justify-center items-center p-4']">
            <img
              :src="pokemon.sprites.front_default"
              :alt="pokemon.name"
              class="w-24 h-24"
            />
          </div>

          <div class="bg-white p-4">
            <h2 class="text-xl font-bold capitalize">{{ pokemon.name }}</h2>
            <p>Altura: {{ pokemon.height / 10 }} m</p>
            <p>Peso: {{ pokemon.weight / 10 }} kg</p>

            <div class="mt-2">
              <h3 class="font-semibold">Tipos:</h3>
              <div class="flex gap-2 mt-1">
              <span
                v-for="type in pokemon.types"
                :key="type.slot"
                class="px-2 py-1 rounded capitalize text-white"
                :class="[getBackgroundClass(type.type.name)]"
              >
                {{ type.type.name }}
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
