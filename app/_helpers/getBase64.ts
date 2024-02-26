
import { getPlaiceholder } from "plaiceholder"
import { ImageResults } from "../_types/types"

//Next.js image component require base64 encoded image for the blurDataUrl prop used for placeholders
export const getBase64 = async (imageUrl: string) => {
    try {
        const res = await fetch(imageUrl)

        if (!res.ok) {
            throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
        }

        const buffer = await res.arrayBuffer()
        const { base64 } = await getPlaiceholder(Buffer.from(buffer))

        return base64

    } catch (e) {
        if (e instanceof Error) console.log(e.stack)
    }
}

const addBlurredDataUrls = async (images: ImageResults) => {
    //Avoid a waterfall of loading each base64 image one by one by making all requests at the same time
    const base64Promises = images.photos.map(photo => getBase64(photo.src))
    const base64Results = await Promise.all(base64Promises)

    const photosWithBlur = images.photos.map((photo, index) => {
        photo.blurredDataUrl = base64Results[index]
        return photo
    })
    return photosWithBlur
}

export default addBlurredDataUrls