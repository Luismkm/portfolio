export default function Project(){
  return(
    <div className='flex flex-col justify-center items-center w-[312px] md:w-[350px] h-[174px] md:h-[240px] bg-[#212121]'>
      <div className='w-[275px] md:w-[300px] h-[100px] md:h-[130px] bg-[#171717]'>

      </div>
      <div className='flex flex-col w-[275px] md:w-[300px]'>
        <span className='text-[0.8125rem] md:text-lg mt-2'>
          Título do projeto
        </span>
        <span className='text-[0.625rem] md:text-sm text-[#828282]'>
          Tecnologias: HTML, CSS e JS.
        </span>
      </div>
  </div>
  )
}