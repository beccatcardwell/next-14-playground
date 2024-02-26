"use server"

import { POKEAPI_BASE_URL } from "../_lib/constants"
import { getBase64 }from "./getBase64"

const fetchMons = async (route: string) => {
    const url = POKEAPI_BASE_URL + route
    try {
         const response = await fetch(url, {
            // next: {
            //     revalidate: 5
            // }
         })
         const data = await response.json()
         const urls = data.results.map((result: {url: string}) => {return result.url})
         let photos = []
         const getEachMon = await Promise.all(urls.map(async (url: string) => {
            const monResponse = await fetch(url)
            const monData = await monResponse.json()
            console.log(monData)

            photos.push({
                src: monData.sprites.front_default,
                id: monData.id
            })
             
            // const base64Url = await getBase64(monData.sprites.front_default)
            
            return {
                name: monData.name,
                id: monData.id,
                sprites: {
                    front_default: monData.sprites.front_default,
                    blurredDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nGNgYGBgePz6u8abxy8sQWww+P/52u6fd672QjiFHoz/j6+49X/RlC6wwKFDh5j+z200+z+jXxskAACetxtEaud+FAAAAABJRU5ErkJggg=='
                },
                types: monData.types
            }
         }))
        
        return {photos: photos, pokemon: getEachMon}
     } catch (error){
         console.error(error)
     }
 }

 export default fetchMons