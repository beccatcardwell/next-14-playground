import Image from "next/image"
import { PokeDetailsType } from "../_types/types"
import { PokeTypesType } from "../_types/types"
import { TYPE_COLOURS } from "../_lib/constants"
import addBlurredDataUrls, { getBase64 } from "../_helpers/getBase64"

const PokeCard = async ({details, blurredUrls}: PokeDetailsType) => {
    const capitalizeWord = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    // console.log(blurredUrls)

    const blurredUrlObj = blurredUrls.find((url) => url.id === details.id)
    const blurredUrl = blurredUrlObj.blurredDataUrl
    // console.log('hellloooo', blurredUrlObj)

    const origName = details.name
    const fmtName = capitalizeWord(origName)
    const id = details.id.toString().padStart(4, '0')

    // const myBlurDataUrl = await getBase64(details.sprites.front_default)

    const renderTypes = (types: {type: { name: string } }[]) =>
        types.map((type: PokeTypesType )  => {
            const origType: string = type.type.name
            const fmtType = capitalizeWord(origType)
            // console.log(fmtType)
            return (
                <li key={origType} style={{backgroundColor: TYPE_COLOURS[origType]}}>{fmtType}</li>
            )
        })
    return (
        <div id={origName + '-card-' + id} className="card__poke">
            <div className="card__header">
                <h2 className="font-bold">{fmtName}</h2>
                <p>{'#' + id}</p>
                <h3>Types:</h3>
                <ul>{renderTypes(details.types)}</ul>
            </div>
            <div className="card__body">
                <Image
                    src={details.sprites.front_default}
                    width={200}
                    height={200}
                    alt={details.name + ' front facing sprite'}
                    placeholder='blur'
                    blurDataURL={blurredUrl}
                />
            </div>  
        </div>
    )
}

export default PokeCard