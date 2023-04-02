import { icons } from '../../public/assets'

export const menu = [
  {
    href: '#about',
    title: 'Sobre mim',
  },
  {
    href: '#project',
    title: 'Projetos',
  },
  {
    href: '#service',
    title: 'Serviços',
  },
  {
    href: '#skill',
    title: 'Minhas skills',
  }
]

export const contacts = [
  {
    link: 'https://github.com/Luismkm',
    img: icons.git,
    alt: 'Icone do GitHub',
    title: 'GitHub',
    subTitle: '/Luismkm',
  },
  {
    link: null,
    img: icons.email,
    alt: 'Icone de e-mail',
    title: 'E-mail',
    subTitle: 'luismkm@hotmail.com',
  },
  {
    link: 'https://www.linkedin.com/in/luismkm/',
    img: icons.linkedin,
    alt: 'Icone do Linkedin',
    title: 'LinkedIn',
    subTitle: 'in/luismkm',
  },
  {
    link: 'https://api.whatsapp.com/send?phone=5542991320857',
    img: icons.whatsapp,
    alt: 'Icone do Whatsapp',
    title: 'Whatsapp',
    subTitle: '(42) 9 91320857',
  }
]

export const services = [
  {
    img: icons.code,
    alt: 'símbolo de maior e menor representando abertura e fechamneto de tag',
    title: 'Criação de sites',
    styles:{
      span: 'md:w-[164px]'
    }
  },
  {
    img: icons.manutence,
    alt: 'duas chaves cruzadas',
    title: 'Manutenção de sites',
  },
  {
    img: icons.smartphone,
    alt: 'ícone de um smartphone',
    title: 'Sites responsivos',
  },
  {
    img: icons.api,
    alt: 'engrenagem representando a api',
    title: 'Desenvolvimento de APIs',
    styles:{
      container: 'xl:col-start-2 xl:col-end-3',
      span: 'md:w-[270px]'
    },
  },
]

export const skills = [
  {
    img: icons.html,
    alt: 'HTML icon',
    title: 'HTML 5',
  },
  {
    img: icons.css,
    alt: 'CSS icon',
    title: 'CSS 3',
  },
  {
    img: icons.ts,
    alt: 'TypeScript icon',
    title: 'TypeScript',
  },
  {
    img: icons.tailwind,
    alt: 'Tailwind icon',
    title: 'Tailwind CSS',
  },
  {
    img: icons.react,
    alt: 'React icon',
    title: 'React',
  },
  {
    img: icons.next,
    alt: 'Next.Js icon',
    title: 'Next Js',
  },
]

export const projects = [
  {
    link: 'https://doctor-care-luismkm.netlify.app',
    img: icons.doctorcare,
    title: 'DoctorCare',
    technologies: 'Tecnologias: React, Tailwind e TS.',
    imgBoxStyles: 'bg-slate-50',
    imgStyles: 'w-[55%] h-[55%]',
  },
  {
    link: 'https://github.com/Luismkm/front-kdmail',
    img: icons.mailgo,
    title: 'Mailgo.',
    technologies: 'Tecnologias: React, Chackra Ui, Node, TS...',
    imgBoxStyles: 'bg-[#171717]',
    imgStyles: 'w-[40%] h-[40%]',
  },
  {
    link: 'https://fashion-luismkm.netlify.app',
    img: icons.fashion,
    title: 'Fashion',
    technologies: 'Tecnologias: React, Tailwind.',
    imgBoxStyles: 'bg-slate-50',
    imgStyles: 'w-[50%] h-[50%]',
  },
  {
    link: 'https://github.com/Luismkm/SpaceFound-Backend',
    img: icons.spacefound,
    title: 'SpaceFound - API',
    technologies: 'Tecnologias: Node, TS, TDD, Design Patterns',
    imgBoxStyles: 'bg-[#171717]',
    imgStyles: 'w-[50%] h-[50%]',
  },
  {
    link: 'https://github.com/Luismkm/api-nestjs-mailgo',
    img: icons.apirest,
    title: 'API Nest',
    technologies: 'Tecnologias: Nest, Prisma, TS, Postgres, JWT, Docker, Rabbit MQ',
    imgBoxStyles: 'bg-slate-50',
    imgStyles: 'w-[25%] h-[25%]',
  }
]
