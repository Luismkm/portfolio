import Image from 'next/image'

interface SkillProps{
  img: string,
  alt: string,
  title: string
}

export default function Skill({ img, alt, title }:SkillProps) {
  return(
    <div className='flex justify-center items-center w-[90px] h-[90px] md:w-[150px] md:h-[150px] bg-gray-800 border-[1px] border-[#333333] transition-color ease-in duration-300 border-transparent hover:border-solid hover:border-[1px] hover:border-secondary hover:border-opacity-50'>
      <Image src={img} alt={alt} title={title} />
    </div>
  )
}
