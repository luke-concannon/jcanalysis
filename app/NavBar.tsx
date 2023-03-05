import { Bars3Icon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Nav from './Nav'

const NavBar = () => {
  return (
    <div className="w-screen m-auto max-w-[1280px] flex flex-row space-between p-4 md:p-6 lg:p-6 xl:p-6 2xl:p-6 items-center">
      <div className="border-l-4 rounded-lg pl-4 border-[#393939] w-full flex flex-col items-left justify-center">
        <Link href="/">
          <h6 className="font-sans font-semibold text-sm sm:text-lg md:text-xl xl:text-xl 2xl:text-xl text-[#393939]">
            PSYCHOANALYSIS
          </h6>
          <h1 className="text-gray-300 font-serif font-bold text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-4xl ">
            J.CONCANNON
          </h1>
        </Link>
      </div>
      <div>
        <Nav />
        <EllipsisVerticalIcon className="border-r-4 border-[#393939] rounded-lg  w-16 sm:hidden md:w-hidden lg:hidden xl:hidden 2xl:hidden   fill-[#393939]" />
      </div>
    </div>
  )
}

export default NavBar
