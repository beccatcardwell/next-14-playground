import { useEffect, useState } from 'react'
import PokeCard from './PokeCard'
import { POKEAPI_BASE_URL } from '../_lib/constants'
import fetchMons from '../_helpers/fetchMons'
import { PokemonCardType } from '../_types/types'

type PokemonCardList = {
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

const PokeCardSection = async () => {
    const mons = await fetchMons('pokemon?limit=20&offset=00')

    const renderCards = (cards: PokemonCardList) => 
        cards.map((card: PokemonCardType )=> {
            return (
                <PokeCard key={card.name + card.id} details={card} />
            )
        })

    return (
        <section className='cards__section grid grid-cols-5 gap-6'>
            {mons && renderCards(mons)}
        </section>
    )
}

export default PokeCardSection