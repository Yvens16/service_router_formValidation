export type PokemonType = "fire" | "water" | "grass" | "electric";

export interface IPokemon {
  name: string;
  type: PokemonType;
}

export interface IDresseur {
  name: string;
  age: number;
}