import Image from 'next/image'

import menu from '../../assets/menu.svg'

export function Header() {
  return (
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
        className="md:hidden mr-1.5 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal"
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
  )
}