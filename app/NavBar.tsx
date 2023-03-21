import Link from 'next/link'
import NavItems from './NavItems'
import NavMobile from './Navmobile'

const NavBar = () => {
  return (
    <div className="m-auto max-w-[1280px] flex flex-row space-between p-4 md:p-6 lg:p-6 xl:p-6 2xl:p-6 items-center">
      <div className="border-l-4 rounded-lg pl-4 border-[#393939] w-full flex flex-col items-left justify-center">
        <Link href="/">
          <h6 className="font-sans font-semibold text-sm sm:text-lg md:text-xl xl:text-xl 2xl:text-xl text-stone-400">
            PSYCHOANALYSIS
          </h6>
          <h1 className="text-zinc-700 font-serif font-bold text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-4xl ">
            J.CONCANNON
          </h1>
        </Link>
      </div>
      <nav>
        <div className="hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
          <NavItems
            ulClass="text-stone-400 font-sans font-semibold flex flex-row list-none space-x-4 space-between items-center sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm"
            liClass="border-l-2 border-r-2 ease-in duration-50 border-zinc-700 hover:underline rounded-sm px-2 hover:text-zinc-700 hover:border-stone-400"
            buttonClass="bg-blue-700 hover:bg-blue-900 font-normal active:scale-95 duration-100 ease-in-out text-white drop-shadow-lg p-2 rounded-md"
          />
        </div>
        <div className="flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
          <NavMobile />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
