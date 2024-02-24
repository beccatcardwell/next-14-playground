"use server"
import { POKEAPI_BASE_URL } from "../_lib/constants"

const fetchMons = async (route: string) => {
    const url = POKEAPI_BASE_URL + route
    try {
         const response = await fetch(url)
         const data = await response.json()
         const urls = data.results.map((result: {url: string}) => {return result.url})
         
         const getEachMon = await Promise.all(urls.map(async (url: string[]) => {
             const monResponse = await fetch(url)
             const monData = await monResponse.json()
             console.log(monData)
             
             return {
                 name: monData.name,
                 id: monData.id,
                 sprites: {
                    front_default: monData.sprites.front_default
                 },
                 types: monData.types
             }
         }))
        return getEachMon
     } catch (error){
         console.error(error)
     }
 }

 export default fetchMons