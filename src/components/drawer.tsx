import Link from "next/link";


function Drawer() {
  return (
    <div
      className="invisible fixed bottom-0 top-0 right-0 z-[1045] flex modal overflow-hidden w-full max-w-full translate-x-full flex-col border-none bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out bg-[#171717] [&[data-te-offcanvas-show]]:transform-none"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      data-te-offcanvas-init
    >
    <div className="h-[72px] offcanvas-header flex items-center justify-end px-4">
      <button
        type="button"
        className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
        data-te-offcanvas-dismiss
      >
        <span
          className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </button>
  </div>
  <div className="flex flex-col justify-center items-center gap-y-10 offcanvas-body flex-grow">
    <ul>
      <li>
        <Link href="">Sobre mim</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link href="">Projetos</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link href="">Serviços</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link href="">Minhas skills</Link>
      </li>
    </ul>
  </div>
</div>
  );
}

export { Drawer };
