import Image from 'next/image'
import PokeCardSection from './_components/PokeCardSection'
import fetchMons from './_helpers/fetchMons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Pokémon</h1>
      <PokeCardSection />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        

      </div>
    </main>
  )
}
