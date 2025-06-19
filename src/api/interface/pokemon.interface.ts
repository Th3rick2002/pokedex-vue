export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  location_area_encounters: string;
  species: { name: string; url: string };
  stats: Stats[];
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
    [key: string]: string | null;
  }
  types: PokemonType[];
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string
  }
}

export interface PokemonTypeResponse {
  slot: number;
  pokemon: {
    name: string;
    url: string
  }
}
