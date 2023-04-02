import { contacts } from "@/src/constants"
import Contact from "../Contact"

export function About() {
  return(
    <section id="about" className='mt-14 flex flex-col justify-center items-center text-center'>
      <h3 className='text-2xl md:text-[2rem] font-bold'>
        Sobre mim
      </h3>
      <p className='text-sm md:text-lg text-gray-400 leading-[140%] md:leading-[32px] mt-4 md:max-w-[700px]'>
        Eu sou um Desenvolvedor full stack com experiência em desenvolvimento web e back-end, atuando com a stack JS, incluindo React e Node, com uso de TypeScript. Meu objetivo é criar soluções criativas e eficientes que melhorem a vida das pessoas, sempre buscando novos desafios e oportunidades para aprender e crescer como desenvolvedor. Se você busca um parceiro para transformar suas ideias em realidade, estou aberto a novas oportunidades e adoraria conversar com você sobre como podemos trabalhar juntos.
      </p>
      <div className='w-full md:max-w-[924px] grid grid-cols-2 md:grid-cols-4 gap-y-11 mt-14 md:mt-20'>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact?.title}
              link={contact.link || ''}
              img={contact.img}
              alt={contact.alt}
              title={contact.title}
              subTitle={contact.subTitle}
            />
          )
        })}
      </div>
    </section>
  )
}
