import Image from 'next/image'

import detail from '../../assets/detail.svg'

export function Hero() {
  return(
    <section className='flex flex-col md:flex-row md:justify-between md:mt-28'>
      <div>
        <h1 className='font-bold text-xl sm:text-[2.25rem] leading-[50px] mt-14 text-center md:text-start md:w-[240px]'>
          Olá, eu sou o Luis Moraes :)
        </h1>
        <h2 className='font-medium text-base md:text-lg leading-5 text-[#828282] mt-2 md:mt-[18px] text-center md:text-start w-full md:w-[327px]'>
          Desenvolvedor Front-End 
          & Back-End
        </h2>
        <div className='flex justify-center mt-8'>
          <button className='bg-[#00DF5E] text-[#171717] mr-3 text-xs px-7 py-2 transition-opacity hover:opacity-90'>
            Download CV
          </button>
          <button className='bg-[#171717] border-[0.697202px] border-[#333333] border-solid text-xs px-7 py-2 transition-color duration-200 hover:border-[#00DF5E]'>
            Entrar em contato
          </button>
        </div>
      </div>
      <Image
        className='hidden md:block'
        src={detail} 
        alt="" 
      />
    </section>
  )
}