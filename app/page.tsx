import Image from 'next/image'
import PokeCardSection from './_components/PokeCardSection'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Pokémon</h1>
      <Suspense fallback={<Loading />}>
        <PokeCardSection />
      </Suspense>
    </main>
  )
}
