import Image from 'next/image'

import menu from '../../public/menu hamburguer.svg'
import detail from '../../public/detail.svg'
import smile from '../../public/smile.svg'
import email from '../../public/mail.svg'
import linkedin from '../../public/linkedin.svg'
import phone from '../../public/phone.svg'

import code from '../../public/code.svg'
import smartphone from '../../public/smartphone.svg'
import manutence from '../../public/manutence.svg'
import api from '../../public/api.svg'

import html from '../../public/html.svg'
import css from '../../public/css.svg'
import ts from '../../public/ts.svg'
import tailwind from '../../public/tailwind.svg'
import react from '../../public/react.svg'
import next from '../../public/next.svg'


export default function Home() {
  return (
    <>
      <div className="w-full max-w-[1120px] mx-auto px-6 xl:px-0">
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

        <main>
          <section className='flex flex-col md:flex-row md:justify-between md:mt-28'>
            <div>
              <h1 className='font-bold text-xl sm:text-2xl mt-14 text-center'>
                Olá, eu sou o Luis Moraes :)
              </h1>
              <h2 className='font-medium leading-5 text-[#828282] mt-2 text-center'>
                Desenvolvedor Front-End 
                <br /> 
                & Back-End
              </h2>
              <div className='flex justify-center mt-8'>
                <button className='bg-[#00DF5E] text-[#171717] mr-3 text-xs px-7 py-2'>
                  Download CV
                </button>
                <button className='bg-[#171717] border-[0.697202px] border-[#333333] border-solid text-xs px-7 py-2'>
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
          <section className='mt-14 flex flex-col justify-center items-center text-center'>
            <h3 className='text-2xl md:text-[2rem] font-bold'>
              Sobre mim
            </h3>
            <p className='text-sm md:text-lg text-[#828282] leading-[140%] md:leading-[32px] mt-4 md:max-w-[700px]'>
              Eu sou um Desenvolvedor full stack com experiência em desenvolvimento web e back-end, atuando com a stack JS, incluindo React e Node, com uso de TypeScript. Meu objetivo é criar soluções criativas e eficientes que melhorem a vida das pessoas, sempre buscando novos desafios e oportunidades para aprender e crescer como desenvolvedor. Se você busca um parceiro para transformar suas ideias em realidade, estou aberto a novas oportunidades e adoraria conversar com você sobre como podemos trabalhar juntos.
            </p>
            
            <div className='w-full md:max-w-[924px] grid grid-cols-2 md:grid-cols-4 gap-y-11 mt-14 md:mt-20'>
              <div className='flex flex-col items-center'>
                <div className='bg-[#212121] w-[62px] h-[62px] rounded-full flex justify-center items-center'>
                  <Image src={smile} alt="" />
                </div>
                <span className='font-bold text-lg mt-5'>
                  Meu Nome
                </span>
                <span className='text-[#828282]'>
                  Luis Moraes
                </span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-[#212121] w-[62px] h-[62px] rounded-full flex justify-center items-center'>
                  <Image src={email} alt="" />
                </div>
                <span className='font-bold text-lg mt-5'>
                  E-mail
                </span>
                <span className='text-[#828282]'>
                  luismkm@hotmail.com
                </span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-[#212121] w-[62px] h-[62px] rounded-full flex justify-center items-center'>
                  <Image src={linkedin} alt="" />
                </div>
                <span className='font-bold text-lg mt-5'>
                  LinkedIn
                </span>
                <span className='text-[#828282]'>
                  /in/luismkm
                </span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-[#212121] w-[62px] h-[62px] rounded-full flex justify-center items-center'>
                  <Image src={phone} alt="" />
                </div>
                <span className='font-bold text-lg mt-5'>
                  Telefone
                </span>
                <span className='text-[#828282]'>
                  (42) 9 91320857
                </span>
              </div>
            </div>
          </section>

          <section className='flex flex-col justify-center items-center'>
            <h3 className='text-2xl md:text-[2rem] font-bold mt-14 md:mt-[127px] mb-8'>
              Projetos
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-11 md:gap-8'>
              <div className='flex flex-col justify-center items-center w-[312px] md:w-[350px] h-[174px] md:h-[240px] bg-[#212121]'>
                <div className='w-[275px] md:w-[300px] h-[100px] md:h-[130px] bg-[#171717]'>

                </div>
                <div className='flex flex-col w-[275px] md:w-[300px]'>
                  <span className='text-[0.8125rem] md:text-lg mt-2'>
                    Título do projeto
                  </span>
                  <span className='text-[0.625rem] md:text-sm text-[#828282]'>
                    Tecnologias: HTML, CSS e JS.
                  </span>
                </div>
              </div>

            <div className='flex flex-col justify-center items-center w-[312px] md:w-[350px] h-[174px] md:h-[240px] bg-[#212121] mt-6 md:mt-0'>
              <div className='w-[275px] md:w-[300px] h-[100px] md:h-[130px] bg-[#171717]'>

              </div>
              <div className='flex flex-col w-[275px] md:w-[300px]'>
                <span className='text-[0.8125rem] md:text-lg mt-2'>
                  Título do projeto
                </span>
                <span className='text-[0.625rem] md:text-sm text-[#828282]'>
                  Tecnologias: HTML, CSS e JS.
                </span>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-[312px] md:w-[350px] h-[174px] md:h-[240px] bg-[#212121] mt-6 md:mt-0'>
              <div className='w-[275px] md:w-[300px] h-[100px] md:h-[130px] bg-[#171717]'>

              </div>
              <div className='flex flex-col w-[275px] md:w-[300px]'>
                <span className='text-[0.8125rem] md:text-lg mt-2'>
                  Título do projeto
                </span>
                <span className='text-[0.625rem] md:text-sm text-[#828282]'>
                  Tecnologias: HTML, CSS e JS.
                </span>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-[312px] md:w-[350px] h-[174px] md:h-[240px] bg-[#212121] mt-6 md:mt-0'>
              <div className='w-[275px] md:w-[300px] h-[100px] md:h-[130px] bg-[#171717]'>

              </div>
              <div className='flex flex-col w-[275px] md:w-[300px]'>
                <span className='text-[0.8125rem] md:text-lg mt-2'>
                  Título do projeto
                </span>
                <span className='text-[0.625rem] md:text-sm text-[#828282]'>
                  Tecnologias: HTML, CSS e JS.
                </span>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-[312px] md:w-[350px] h-[174px] md:h-[240px] bg-[#212121] mt-6 md:mt-0'>
              <div className='w-[275px] md:w-[300px] h-[100px] md:h-[130px] bg-[#171717]'>

              </div>
              <div className='flex flex-col w-[275px] md:w-[300px]'>
                <span className='text-[0.8125rem] md:text-lg mt-2'>
                  Título do projeto
                </span>
                <span className='text-[0.625rem] md:text-sm text-[#828282]'>
                  Tecnologias: HTML, CSS e JS.
                </span>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-[312px] md:w-[350px] h-[174px] md:h-[240px] bg-[#212121] mt-6 md:mt-0'>
              <div className='w-[275px] md:w-[300px] h-[100px] md:h-[130px] bg-[#171717]'>

              </div>
              <div className='flex flex-col w-[275px] md:w-[300px]'>
                <span className='text-[0.8125rem] md:text-lg mt-2'>
                  Título do projeto
                </span>
                <span className='text-[0.625rem] md:text-sm text-[#828282]'>
                  Tecnologias: HTML, CSS e JS.
                </span>
              </div>
            </div>
            </div>
          </section>

          <section className='flex flex-col justify-center items-center'>
            <h3 className='text-2xl md:text-[2rem] font-bold mt-14 md:mt-[127px] mb-8'>
              Serviços
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-11'>
            <div className='flex flex-col justify-center items-center md:justify-center md:py-[25px] md:items-start mt-6 w-[311px] md:w-[350px] h-[140px] md:h-[240px] bg-[#212121] border-b-[3px] border-[#00DF5E]'>
                <Image className='md:w-[56px] md:mb-[40px] md:ml-[30px]' src={code} alt="" />
                <span className='text-sm md:text-[2rem] md:ml-[30px] text-[#828282] font-medium mt-2 md:w-[230px] md:leading-[42px]'>
                  Criação de sites
                </span>
              </div>

              <div className='flex flex-col justify-center items-center md:justify-center md:py-[25px] md:items-start mt-6 w-[311px] md:w-[350px] h-[140px] md:h-[240px] bg-[#212121] border-b-[3px] border-[#00DF5E]'>
                <Image className='md:w-[56px] md:mb-[40px] md:ml-[30px]' src={manutence} alt="" />
                <span className='text-sm md:text-[2rem] md:ml-[30px] text-[#828282] font-medium mt-2 md:w-[230px] md:leading-[42px]'>
                  Manutenção de sites
                </span>
              </div>

              <div className='flex flex-col justify-center items-center md:justify-center md:py-[25px] md:items-start mt-6 w-[311px] md:w-[350px] h-[140px] md:h-[240px] bg-[#212121] border-b-[3px] border-[#00DF5E]'>
                <Image className='md:w-[56px] md:mb-[40px] md:ml-[30px]' src={smartphone} alt="" />
                <span className='text-sm md:text-[2rem] md:ml-[30px] text-[#828282] font-medium mt-2 md:w-[230px] md:leading-[42px]'>
                  Sites responsivos
                </span>
              </div>

              <div className='flex flex-col justify-center items-center xl:col-start-2 xl:col-end-3 md:justify-center md:py-[25px] md:items-start mt-6 w-[311px] md:w-[350px] h-[140px] md:h-[240px] bg-[#212121] border-b-[3px] border-[#00DF5E]'>
                <Image className='md:w-[56px] md:mb-[40px] md:ml-[30px]' src={api} alt="" />
                <span className='text-sm md:text-[2rem] md:ml-[30px] text-[#828282] font-medium mt-2 md:w-[230px] md:leading-[42px]'>
                  Desenvolvimento de APIs
                </span>
              </div>

            </div>
          </section>

          <section className='flex flex-col justify-center items-center mb-14'>
            <h3 className='text-2xl md:text-[2rem] font-bold mt-14 md:mt-[127px] mb-6 md:mb-7'>
              Minhas skills
            </h3>
            <div className='grid grid-cols-3 xl:grid-cols-6 gap-5 md:gap-12'>
              <div className='flex justify-center items-center w-[90px] h-[90px] md:w-[150px] md:h-[150px] bg-[#212121] border-[1px] border-[#333333]'>
                <Image src={html} alt="HTML icon" title='HTML 5' />
              </div>
              <div className='flex justify-center items-center w-[90px] h-[90px] md:w-[150px] md:h-[150px] bg-[#212121] border-[1px] border-[#333333]'>
                <Image src={css} alt="CSS icon" title='CSS 3' />
              </div>
              <div className='flex justify-center items-center w-[90px] h-[90px] md:w-[150px] md:h-[150px] bg-[#212121] border-[1px] border-[#333333]'>
                <Image src={ts} alt="TypeScript icon" title='TypeScript' />
              </div>
              <div className='flex justify-center items-center w-[90px] h-[90px] md:w-[150px] md:h-[150px] bg-[#212121] border-[1px] border-[#333333]'>
                <Image src={tailwind} alt="Tailwind icon" title='Tailwind CSS'/>
              </div>
              <div className='flex justify-center items-center w-[90px] h-[90px] md:w-[150px] md:h-[150px] bg-[#212121] border-[1px] border-[#333333]'>
                <Image src={react} alt="React icon" title='React' />
              </div>
              <div className='flex justify-center items-center w-[90px] h-[90px] md:w-[150px] md:h-[150px] bg-[#212121] border-[1px] border-[#333333]'>
                <Image src={next} alt="Next.Js icon" title='Next Js' />
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className='w-screen flex flex-col justify-center items-center md:mt-[185px] h-16 md:h-[60px] bg-[#212121]'>
        <span className='text-sm'>Desenvolvido por <span className='text-[#00DF5E] font-bold'>Luis Moraes</span></span>
        <span className="text-xs">Design por <span className='text-[#00DF5E] font-bold'>Iuri Silva</span></span>
      </footer>
    </>
  )
}
