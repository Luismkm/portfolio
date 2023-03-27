import { git, email, linkedin, whatsapp, code, manutence, smartphone, api, html, css, ts, tailwind, react, next } from '../assets'

export const contacts = [
  {
    link: 'https://github.com/Luismkm',
    img: git,
    alt: 'Icone do GitHub',
    title: 'GitHub',
    subTitle: '/Luismkm',
  },
  {
    link: null,
    img: email,
    alt: 'Icone de e-mail',
    title: 'E-mail',
    subTitle: 'luismkm@hotmail.com',
  },
  {
    link: 'https://www.linkedin.com/in/luismkm/',
    img: linkedin,
    alt: 'Icone do Linkedin',
    title: 'LinkedIn',
    subTitle: 'in/luismkm',
  },
  {
    link: 'https://api.whatsapp.com/send?phone=5542991320857',
    img: whatsapp,
    alt: 'Icone do Whatsapp',
    title: 'Whatsapp',
    subTitle: '(42) 9 91320857',
  }
]

export const services = [
  {
    img: code,
    alt: 'símbolo de maior e menor representando abertura e fechamneto de tag',
    title: 'Criação de sites',
  },
  {
    img: manutence,
    alt: 'duas chaves cruzadas',
    title: 'Manutenção de sites',
  },
  {
    img: smartphone,
    alt: 'ícone de um smartphone',
    title: 'Sites responsivos',
  },
  {
    img: api,
    alt: 'engrenagem representando a api',
    title: 'Desenvolvimento de APIs',
    styles: 'xl:col-start-2 xl:col-end-3',
  },
]

export const skills = [
  {
    img: html,
    alt: 'HTML icon',
    title: 'HTML 5',
  },
  {
    img: css,
    alt: 'CSS icon',
    title: 'CSS 3',
  },
  {
    img: ts,
    alt: 'TypeScript icon',
    title: 'TypeScript',
  },
  {
    img: tailwind,
    alt: 'Tailwind icon',
    title: 'Tailwind CSS',
  },
  {
    img: react,
    alt: 'React icon',
    title: 'React',
  },
  {
    img: next,
    alt: 'Next.Js icon',
    title: 'Next Js',
  },
]
