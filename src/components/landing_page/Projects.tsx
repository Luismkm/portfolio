import { projects } from '@/src/constants'
import Project from '../Project'

export function Projects() {
  return(
    <section id="project" className='flex flex-col justify-center items-center'>
      <h3 className='text-2xl md:text-[2rem] font-bold mt-14 md:mt-[127px] mb-8'>
        Projetos
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-y-8 md:gap-x-11'>
        {projects.map((project) => (
          <Project
            link={project.link}
            key={project.link}
            img={project.img}
            title={project.title}
            technologies={project.technologies}
            imgBoxStyles={project.imgBoxStyles}
            imgStyles={project.imgStyles}
          />
        ))}
      </div>
    </section>
  )
}
