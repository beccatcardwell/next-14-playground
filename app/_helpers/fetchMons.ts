"use server"

import { POKEAPI_BASE_URL } from "../_lib/constants"

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
         let photos: any[] = []
         const getEachMon = await Promise.all(urls.map(async (url: string) => {
            const monResponse = await fetch(url)
            const monData = await monResponse.json()

            //Grouping photos together so they can be processed by addBlurredDataUrls later
            photos.push({
                src: monData.sprites.front_default,
                id: monData.id
            })
            
            return {
                name: monData.name,
                id: monData.id,
                sprites: {
                    front_default: monData.sprites.front_default,
                    blurredDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgwAYO/H/WtOrTwjy4QM+VM2WVxzZGY1UNAHg6CsDqG+GAAAAAAElFTkSuQmCC'
                },
                types: monData.types
            }
         }))
        
        return {photos: photos, pokemon: getEachMon}
     } catch (error){
         console.error(error)
         //fallback pokemon return
         return {
            photos: [{
                src: 'images/sprite_fallback.webp',
                id: 1,
            }],
            pokemon: [
                {
                    name: 'bulbasaur',
                    id: 1,
                    sprites: {
                        front_default: 'images/sprite_fallback.webp',
                        blurredDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgwAYO/H/WtOrTwjy4QM+VM2WVxzZGY1UNAHg6CsDqG+GAAAAAAElFTkSuQmCC'
                    },
                    types: [
                        { type: 'grass' },
                        { type: 'poison' }
                    ]
                }
            ]
         }
     }
 }

 export default fetchMons