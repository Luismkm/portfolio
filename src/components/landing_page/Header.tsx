import Image from 'next/image'

import { icons } from '../../../public/assets'
import { useEffect, useState } from 'react'
import { Drawer } from '../drawer'
import Link from 'next/link'

export function Header() {
  const[isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    }
  }, [isMenuOpen]);

  return (
    <>
    <Drawer isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

    <header className="flex justify-between items-center mt-6">
      <h1 className='font-bold'>Portfólio</h1>
      <nav>
        <ul className="hidden md:flex md:w-[470px] md:justify-between">
          <li className='transition-colors duration-500 ease-out hover:text-[#00DF5E] hover:opacity-80'>
            <Link href="#about">Sobre mim</Link>
          </li>
          <li className='transition-colors duration-500 ease-out hover:text-[#00DF5E] hover:opacity-80'>
            <Link href="#project">Projetos</Link>
          </li>
          <li className='transition-colors duration-500 ease-out hover:text-[#00DF5E] hover:opacity-80'>
            <Link href="#service">Serviços</Link>
          </li>
          <li className='transition-colors duration-500 ease-out hover:text-[#00DF5E] hover:opacity-80'>
            <Link href="#skill">Minhas skills</Link>
          </li>
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
        <Image src={icons.menu} alt="" />
      </button>
    </header>
    </>
  )
}
