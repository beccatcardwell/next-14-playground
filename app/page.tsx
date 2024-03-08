import Image from 'next/image'
import PokeCardSection from './_components/PokeCardSection'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <>
      <header>
        <div className='container mx-auto container__title flex-col items center'>
          <h1 className='title__main'>Next.js 14 Playground</h1>
          <p className='p__main'>This page is fetching <a href='https://pokeapi.co/' target='_blank' rel='noopener'>PokéAPI</a> data using Server Components.</p>
          <p className='p__main'>The image urls  in the fetch are then gathered together to run through a function that generates fast loading base64 images to use as placeholders.</p>
        </div>
      </header>
      <main className="main__home flex min-h-screen flex-col items-center">
        <div className='container mx-auto'>
          <Suspense fallback={<Loading />}>
            <PokeCardSection />
          </Suspense>
        </div>
      </main>
    </>
  )
}
