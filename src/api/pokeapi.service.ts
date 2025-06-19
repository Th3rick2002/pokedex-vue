import type {Pokemon, PokemonTypeResponse} from "@/api/interface/pokemon.interface.ts";
import axios from "axios";

export async function searchPokemon(name: string): Promise<Pokemon> {
  try {
    const response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    return response.data;
  }catch (e) {
    throw new Error('Pokemon no encontrado');
  }
}

export async function filterPokemon(type: string){
  try {
    const pokemosTypes: Pokemon[] = [];
    const typeResponse = await axios.get(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`);

    const details = await Promise.all(
      typeResponse.data.pokemon.map( (p: PokemonTypeResponse) => axios.get(p.pokemon.url) )
    )

    details.map(pokemon => pokemosTypes.push(pokemon.data))

    return pokemosTypes;
  }catch (e) {
    throw e;
  }
}

export async function randomPokemon(){
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251`);
    if (!response.data) {
      throw new Error('Pokémon no encontrado');
    }

    const randomNumber = Math.floor(Math.random() * response.data.results.length);
    const data = response.data.results[randomNumber];

    const pokemonData = await axios.get(`${data.url}`);
    return pokemonData.data;
  }catch (e) {
    throw e;
  }
}
