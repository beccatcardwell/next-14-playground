export type PokemonCardType = {
    name: string
    id: number
    sprites: {
        front_default: string
    }
    types: {
        type: {
            name: string
        }
    }[]
}

export type PokeDetailsType = {
    details: {
        name: string
        id: number
        sprites: {
            front_default: string
        }
        types: {
            type: {
                name: string
            }
        }[]
    }
}

export type PokeTypesType = {
    type: {
        name: string
    }
}

