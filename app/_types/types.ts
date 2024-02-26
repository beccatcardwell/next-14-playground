export type PokeTypesType = {
    type: {
        name: string
    }
}

export type PokeCardType = {
    name: string
    id: number
    sprites: {
        front_default: string
        blurredDataUrl: string | undefined
    }
    types: PokeTypesType[]
}

export type blurredDataUrlType = {
    find?(arg0: (url: any) => boolean): unknown
    src: string
    id: number
    blurredDataUrl: string | undefined
}

export type ImageResults = {
    photos: blurredDataUrlType[]
}

export type PokeDetailsType = {
    details: PokeCardType
    blurredUrls: blurredDataUrlType[]
}

export type PokeListType = PokeCardType[]


export type MonsDataType = ImageResults & { 
    pokemon: PokeCardType[]
}

