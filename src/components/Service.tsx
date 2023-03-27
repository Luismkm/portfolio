import Image from 'next/image'

interface ServiceProps {
  img: string,
  alt: string,
  title: string,
  styles?: string
}

export default function Service({ img, alt, title, styles }:ServiceProps) {
  return(
    <div className={`${styles} flex flex-col justify-center items-center md:justify-center md:py-[25px] md:items-start mt-6 w-[311px] md:w-[350px] h-[140px] md:h-[240px] bg-[#212121] border-b-[3px] border-[#00DF5E]`}>
      <Image className='md:w-[56px] md:mb-[40px] md:ml-[30px]' src={img} alt={alt} />
      <span className='text-sm md:text-[2rem] md:ml-[30px] text-[#828282] font-medium mt-2 md:w-[230px] md:leading-[42px]'>
        {title}
      </span>
    </div>
  )
}