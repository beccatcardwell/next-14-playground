import Image from "next/image"
import { PokeDetailsType } from "../_types/types"
import { PokeTypesType } from "../_types/types"

const PokeCard = ({details}: PokeDetailsType) => {
    const origName = details.name
    const fmtName = origName.charAt(0).toUpperCase() + origName.slice(1)
    const id = details.id.toString().padStart(4, '0')

    const renderTypes = (types: {type: { name: string } }[]) =>
        types.map((type: PokeTypesType )  => {
            return (
                <li key={type.type.name}>{type.type.name}</li>
            )
        })
    return (
        <div id={origName + '-card-' + id} className="card__poke">
            <div className="card__header">
                <h2>{fmtName}</h2>
                <p>{'#' + id}</p>
                <h3>Types:</h3>
                <ul>{renderTypes(details.types)}</ul>
            </div>
            <div className="card__body">
                <Image src={details.sprites.front_default} width={200} height={200} alt={details.name + ' front facing sprite'}/>
            </div>  
        </div>
    )
}

export default PokeCard