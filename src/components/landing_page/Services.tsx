import { services } from "@/src/constants"
import Service from "../Service"

export function Services() {
  return(
    <section id="service" className='flex flex-col justify-center items-center'>
      <h3 className='text-2xl md:text-[2rem] font-bold mt-14 md:mt-[127px] mb-8'>
        Serviços
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-11'>
        {services.map((service) => {
            return(
              <Service
                key={service.img}
                img={service.img}
                alt={service.alt}
                title={service.title}
                styles={service.styles || undefined}
              />
            )
          })}
      </div>
    </section>
  )
}
