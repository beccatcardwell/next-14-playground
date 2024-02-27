import Image from "next/image"
import { PokeDetailsType } from "../_types/types"
import { PokeTypesType } from "../_types/types"
import { TYPE_COLOURS } from "../_lib/constants"

const PokeCard = async ({details, blurredUrls}: PokeDetailsType) => {
    const capitalizeWord = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    
    //find matching blurredDataUrl for placeholder image
    const blurredUrlObj = blurredUrls.find((url) => url.id === details.id)
    const blurredUrl = blurredUrlObj?.blurredDataUrl
    const origName = details.name
    const fmtName = capitalizeWord(origName)
    const id = details.id.toString().padStart(4, '0')

    const renderTypes = (types: {type: { name: string } }[]) =>
        types.map((type: PokeTypesType )  => {
            const origType: string = type.type.name
            const fmtType = capitalizeWord(origType)

            return (
                <li key={origType} style={{backgroundColor: TYPE_COLOURS[origType]}}><span>{fmtType}</span></li>
            )
        })
    return (
        <div id={origName + '-card-' + id} className="card__poke">
            <div className="card__header">
                <h2 className="font-bold">{fmtName}</h2>
                <p>{'#' + id}</p>
               
            </div>
            <div className="card__img">
                <Image
                    src={details.sprites.front_default}
                    width={200}
                    height={200}
                    alt={details.name + ' front facing sprite'}
                    placeholder='blur'
                    blurDataURL={blurredUrl}
                />
            </div>
            <div className="card__body">
                <h3>Types:</h3>
                <ul>{renderTypes(details.types)}</ul>
            </div>
        </div>
    )
}

export default PokeCard