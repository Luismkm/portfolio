import Image from 'next/image'

import { icons } from '../../../public/assets'
import { useEffect, useState } from 'react'

interface CopiedProps {
  img: string,
  alt: string
}

export default function Copied({ img, alt }:CopiedProps) {
  const[isCopiedVisible, setIsCopiedVisible] = useState(false)


  useEffect(() => {
    if(isCopiedVisible){
      navigator.clipboard.writeText("luismkm@hotmail.com");
      setTimeout(() => {
        setIsCopiedVisible(false)
      }, 500)
    }
  },[isCopiedVisible])


  return(
    <>
      <p className={`${ isCopiedVisible ? 'flex' : 'hidden' } gap-x-2 absolute -mt-8 text-[#00DF5E] w-auto h-auto px-3 rounded-full`} >
        <Image src={icons.copy} alt='' />
        copied
      </p>
      <div
        className='btn-copy bg-[#212121] w-[62px] h-[62px] cursor-pointer  rounded-full flex justify-center items-center transition-color ease-in duration-300 border-[1px] border-transparent hover:border-solid hover:border-spacing-1 hover:border-[#00DF5E]'
        onClick={() => setIsCopiedVisible(true)}
        data-clipboard-target="#luismkm@hotmail.com"
      >
        <Image src={img} alt={alt} />
      </div>
    </>
  )
}
