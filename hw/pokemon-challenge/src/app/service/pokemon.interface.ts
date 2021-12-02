export interface pokemonInfo {
    id: number;
    weight: number;
    height: number;
    types: Type[];
    species: Specie;
    sprites: Sprite;
}

export interface Type {
    slot: number;
    type: {
        name: string;
    }
}

export interface Specie {
    name: string;
}

export interface Sprite {
    other: {
        dream_world: {
            front_default: string;
        }
    }
}