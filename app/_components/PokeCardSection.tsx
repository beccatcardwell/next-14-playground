import PokeCard from './PokeCard'
import fetchMons from '../_helpers/fetchMons'
import { MonsDataType, PokeCardType, PokeListType } from '../_types/types'
import addBlurredDataUrls from "../_helpers/getBase64"

const PokeCardSection = async () => {
    const monsData: MonsDataType = await fetchMons('pokemon?limit=20&offset=00')
    const mons = monsData?.pokemon
    const blurredUrls = await addBlurredDataUrls(monsData)

    const renderCards = (cards: PokeListType) =>
        cards.map((card: PokeCardType )=> {

            return (
                <PokeCard
                    key={card.name + card.id}
                    details={card}
                    blurredUrls={blurredUrls}
                />
            )
        })
    
    return (
        <section className='cards__section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 xl:gap-8'>
            {mons && renderCards(mons)} 
        </section>
    )
}

export default PokeCardSection