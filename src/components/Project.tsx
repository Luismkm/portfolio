import Image from 'next/image'

interface ProjectProps {
  link: string,
  img: string,
  title: string,
  technologies: string,
  imgBoxStyles: string
  imgStyles: string
}

export default function Project({ link, img, title, technologies, imgBoxStyles, imgStyles }:ProjectProps){
  return(
    <div className='flex flex-col justify-center items-center w-[312px] md:w-[350px] h-[174px] md:h-[240px] bg-[#212121]'>
      <a href={link} target='_blank'>
        <div className={`${imgBoxStyles} flex justify-center items-center w-[275px] md:w-[300px] h-[100px] md:h-[130px] transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100`}>
          <Image className={imgStyles} src={img} alt="" />
        </div>
      </a>
      <div className='flex flex-col w-[275px] md:w-[300px]'>
        <span className='text-[0.8125rem] md:text-lg mt-2'>
          {title}
        </span>
        <span className='text-[0.625rem] md:text-sm text-[#828282]'>
          {technologies}
        </span>
      </div>
    </div>
  )
}
