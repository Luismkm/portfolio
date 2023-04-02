import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { menu } from '@/src/constants'

import { icons } from '../../../public/assets'
import { Drawer } from '../Drawer'

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
            history.replaceState(null, '', window.location.pathname);
          }, 300);
        }
      }
    }
  }, [isMenuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(href!.substring(1)) as HTMLElement;

    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop
      });
    }
  };

  return (
    <>
    <Drawer isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

    <header className="flex justify-between items-center mt-6">
      <h1 className='font-bold'>Portfólio</h1>
      <nav>
        <ul className="hidden md:flex md:w-[470px] md:justify-between">
          {menu.map((item) => (
            <li
              key={item.href}
              className='transition-colors duration-500 ease-out hover:text-secondary hover:opacity-80'>
              <Link onClick={handleClick} href={item.href}>{item.title}</Link>
            </li>
          ))}
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
