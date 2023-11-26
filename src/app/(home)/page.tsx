import Link from 'next/link'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <div className="w-full h-screen px-6 md:px-0 mx-auto">
      <div className="h-full flex flex-col items-start justify-center">
        <h1 className="font-semibold text-6xl tracking-tighter">
          Olá, eu sou Vitor
        </h1>
        <p className="text-muted-foreground py-4">
          unindo design e codigo, sigo criando projetos unicos.
        </p>
        <div className='flex items-center gap-2 pt-4'>
          <Button>Meus projetos</Button>

          <Button variant={'link'}>Entrar em contato</Button>
        </div>
      </div>
    </div>
  )
}
