import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

import Nefropapers from '../../../public/images/nefropapers.png'
import Empreart from '../../../public/images/empreart.png'

interface ProjectsProps {
  id: number,
  name: string
  image: string
}

const Projects = [
  {
    id: 1,
    name: Nefropapers,
    image: Nefropapers
  },
  {
    id: 2,
    name: Empreart,
    image: Empreart,
  }
]

export default function Home() {
  return (
    <div className="w-full h-screen px-6 md:px-0 mx-auto">
      <div className="h-full flex flex-col items-start justify-center max-w-6xl mx-auto">
        <h1 className="font-semibold text-4xl lg:text-6xl tracking-tighter">
          Olá, eu sou Vitor<span className="text-primary">.</span> 
          <br/>Front-end Developer
        </h1>
        <p className="text-muted-foreground py-4 font-inter font-regular text-base lg:text-lg lg:max-w-[50%]">
          Desenvolvendo soluções digitais únicas e eficientes, sempre com o objetivo de transformar ideias em realidade.
        </p>
        <div className='flex items-center gap-2 pt-4'>
          <Button>Meus projetos</Button>

          <Button variant={'link'}>Entrar em contato</Button>
        </div>
      </div>

      <section className='max-w-6xl mx-auto'>
        <h2 className='font-grotesk font-semibold text-2xl lg:text-3xl'>Projetos mais recentes</h2>

        <div className='grid grid-cols-1 lg:grid-cols-3'>
          
        </div>
      </section>
    </div>
  )
}
