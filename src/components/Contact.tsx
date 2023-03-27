import Image from 'next/image'

interface ContactProps {
  link?: string,
  img: string,
  alt: string,
  title: string,
  subTitle: string
}

export default function Contact({ link, img, alt, title, subTitle }:ContactProps) {
  return(
    <div className='flex flex-col items-center'>
      {
        link
        ?  
        <a href={link} target="_blank" className='bg-[#212121] w-[62px] h-[62px]  rounded-full flex justify-center items-center transition-color ease-in duration-300 border-[1px] border-transparent hover:border-solid hover:border-spacing-1 hover:border-[#00DF5E]'>
          <Image src={img} alt={alt} />
          </a>
        :
        <>
          <div className='bg-[#212121] w-[62px] h-[62px]  rounded-full flex justify-center items-center transition-color ease-in duration-300 border-[1px] border-transparent hover:border-solid hover:border-spacing-1 hover:border-[#00DF5E]'>
            <Image src={img} alt={alt} />
          </div>
        </>
      }
      <span className='font-bold text-lg mt-5'>
        {title}
      </span>
      <span className='text-[#828282]'>
        {subTitle}
      </span>
  </div>
  )
}