import { skills } from "@/src/constants"
import Skill from "../Skill"

export function Skills() {
  return(
    <section id="skill" className='flex flex-col justify-center items-center mb-[56px] md:mb-[185px]'>
      <h3 className='text-2xl md:text-[2rem] font-bold mt-14 md:mt-[127px] mb-6 md:mb-7'>
        Minhas skills
      </h3>
      <div className='grid grid-cols-3 xl:grid-cols-6 gap-5 md:gap-11'>
        {skills.map((skill) => {
          return(
            <Skill
              key={skill.alt}
              img={skill.img}
              alt={skill.alt}
              title={skill.title}
            />
          )
        })}
      </div>
    </section>
  )
}
