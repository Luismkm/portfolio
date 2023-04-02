import Image from 'next/image'
import Copied from './landing_page/Copied'

interface ContactProps {
  link?: string,
  img: string,
  alt: string,
  title: string,
  subTitle: string
}

export default function Contact({ link, img, alt, title, subTitle }:ContactProps) {
  return(
    <div className='flex flex-col items-center relative'>
      {
        link
        ?
          <a href={link} target="_blank" className='bg-gray-800 w-[62px] h-[62px]  rounded-full flex justify-center items-center transition-color ease-in duration-300 border-[1px] border-transparent hover:border-solid hover:border-spacing-1 hover:border-secondary'>
            <Image src={img} alt={alt} />
          </a>
        :
          <Copied img={img} alt={alt} />
      }
      <span className='font-bold text-lg mt-5'>
        {title}
      </span>
      <span className='text-gray-400'>
        {subTitle}
      </span>
  </div>
  )
}
