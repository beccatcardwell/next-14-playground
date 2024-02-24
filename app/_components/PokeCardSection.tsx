import PokeCard from './PokeCard'
import fetchMons from '../_helpers/fetchMons'
import { PokeCardType, PokeListType } from '../_types/types'

const PokeCardSection = async () => {
    const mons = await fetchMons('pokemon?limit=20&offset=00')

    const renderCards = (cards: PokeListType) => 
        cards.map((card: PokeCardType )=> {
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