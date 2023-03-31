import Image from 'next/image'

import menu from '../../assets/menu.svg'
import { useState } from 'react'
import { Drawer } from '../drawer'

export function Header() {
  const[isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    <Drawer isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

    <header className="flex justify-between items-center mt-6">
      <h1 className='font-bold'>Portfólio</h1>
      <nav>
        <ul className="hidden md:flex md:w-[470px] md:justify-between">
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Serviços</li>
          <li>Minhas skills</li>
        </ul>
      </nav>
      <button
        className="md:hidden inline-block rounded pt-2.5 pb-2 text-xs font-medium uppercase leading-normal"
        onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
        type="button"
        data-te-offcanvas-toggle
        data-te-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <Image src={menu} alt="" />
      </button>
    </header>
    </>
  )
}