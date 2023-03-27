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
      <nav className='md:hidden'>
        <Image src={menu} alt="" />
      </nav>
    </header>
  )
}