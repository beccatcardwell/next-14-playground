import PokeCard from './PokeCard'
import fetchMons from '../_helpers/fetchMons'
import { PokeCardType, PokeListType } from '../_types/types'
import addBlurredDataUrls, { getBase64 } from "../_helpers/getBase64"

const PokeCardSection = async () => {
    const monsData = await fetchMons('pokemon?limit=200&offset=00')
    // console.log('photooooooooos ',monsData)
    const mons = monsData?.pokemon
    const blurredUrls = await addBlurredDataUrls(monsData)
    // console.log(blurredUrls)


    const renderCards = (cards: PokeListType) => 
        cards.map((card: PokeCardType )=> {

            return (
                <PokeCard key={card.name + card.id} details={card} blurredUrls={blurredUrls} />
            )
        })
    
    return (
        <section className='cards__section grid grid-cols-5 gap-6'>
            {mons && renderCards(mons)} 
        </section>
    )
}

export default PokeCardSection