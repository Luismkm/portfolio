import Image from 'next/image'

import { icons } from '../../../public/assets'

export function Hero() {
  return(
    <section className='flex flex-col md:flex-row md:justify-between md:mt-28'>
      <div>
        <h1 className='font-bold text-xl sm:text-[2.25rem] leading-[50px] mt-14 text-center md:text-start md:w-[240px]'>
          Olá, eu sou o Luis Moraes :)
        </h1>
        <h2 className='font-medium text-base md:text-lg leading-5 text-gray-400 mt-2 md:mt-[18px] text-center md:text-start w-full md:w-[327px]'>
          Desenvolvedor Front-End
          & Back-End
        </h2>
        <div className='flex justify-center mt-8'>
        <a href="./LUIS MARCELO KRAUTIUK DE MORAES - FULLSTACK.pdf" download="LUIS MARCELO KRAUTIUK DE MORAES - FULLSTACK.pdf">
          <button className='bg-secondary text-primary mr-3 text-xs px-7 py-2 transition-opacity hover:opacity-90'>
            Download CV
          </button>
        </a>

          <a href="https://api.whatsapp.com/send?phone=5542991320857" target='_blank'>
            <button className='bg-primary border-[0.697202px] border-[#333333] border-solid text-xs px-7 py-2 transition-color duration-200 hover:border-secondary'>
              Entrar em contato
            </button>
          </a>
        </div>
      </div>
      <Image
        className='hidden md:block'
        src={icons.detail}
        alt=""
      />
    </section>
  )
}
