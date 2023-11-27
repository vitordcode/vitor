import Link from 'next/link'

import { Button } from '../ui/button'
import { HomeIcon, ListOrderedIcon, MenuIcon, PercentIcon } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { Card } from '../ui/card'

const Header = () => {
  return (
    <header className="w-full fixed top-0">
      <Card className="w-full ">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-6 px-6 md:px-0">
          <Link href={'/'} className="font-medium font-grotesk text-lg">
            vitordcode<span className="text-primary">.</span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-4 flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-1"
                >
                  <HomeIcon size={16} />
                  Inicio
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-1"
                >
                  <PercentIcon size={16} />
                  Ofertas
                </Button>

                <SheetClose asChild>
                  <Link href={`/catalog`}>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-1"
                    >
                      <ListOrderedIcon size={16} />
                      Catálogo
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Card>
    </header>
  )
}

export default Header
