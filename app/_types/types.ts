export type PokeCardType = {
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

export type PokeListType = {
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
}[]

