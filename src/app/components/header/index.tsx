'use client'
import Link from 'next/link'
import { useState } from 'react'

import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { Separator } from '../ui/separator'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-6 md:px-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href={'/'}
            className="group font-medium font-grotesk text-lg hover:text-primary transition-colors"
          >
            vitordcode
            <span className="text-primary group-hover:text-foreground">.</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 hover:text-primary transition-colors" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="#"
            className="text-sm font-base leading-6 hover:text-primary transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#"
            className="text-sm font-base leading-6 hover:text-primary transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="#"
            className="text-sm font-base leading-6 hover:text-primary transition-colors"
          >
            Contato
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={'/'}
              className="group font-medium font-grotesk text-lg hover:text-primary transition-colors"
            >
              vitordcode
              <span className="text-primary group-hover:text-foreground">
                .
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 hover:text-primary transition-colors" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <Separator />
            <div className="my-2 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:bg-secondary transition-colors"
                >
                  Sobre
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:bg-secondary transition-colors"
                >
                  Projetos
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:bg-secondary transition-colors"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header
