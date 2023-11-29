import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

import Nefropapers from '../../../public/images/nefropapers.png'
import Empreart from '../../../public/images/empreart.png'
import Image from 'next/image'

import vitor from '../../../public/images/vitor-hero.png'

interface ProjectsProps {
  id: number
  name: string
  image: string
}

const Projects = [
  {
    id: 1,
    name: Nefropapers,
    image: Nefropapers,
  },
  {
    id: 2,
    name: Empreart,
    image: Empreart,
  },
]

export default function Home() {
  return (
    <div className="w-full h-screen px-6 md:px-0 mx-auto relative">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr background-animate from-primary via-teal-500 to-lime-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="h-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center w-full h-full">
          <div className="flex flex-col justify-center col-start-2 md:col-start-1">
            <h1 className="font-semibold text-4xl lg:text-6xl tracking-tighter">
              Olá, eu sou Vitor<span className="text-primary">.</span>
              <br />
              Front-end Developer
            </h1>
            <p className="text-muted-foreground py-4 font-inter font-regular text-base lg:text-lg">
              Desenvolvendo soluções digitais únicas e eficientes, sempre com o
              objetivo de transformar ideias em realidade.
            </p>
            <div className="flex items-center gap-2 pt-4">
              <Button>Meus projetos</Button>

              <Button variant={'link'}>Entrar em contato</Button>
            </div>
          </div>

          <div className='flex items-center justify-start col-start-1 md:col-start-2 w-96 md:w-full'>
            <Image className='w-full' src={vitor} alt='Imagem de Vitor' />
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto">
        <h2 className="font-grotesk font-semibold text-2xl lg:text-3xl">
          Projetos mais recentes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3"></div>
      </section>
    </div>
  )
}
