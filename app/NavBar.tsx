import { Bars3Icon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  return (
    <div className="flex flex-row space-between p-4 md:p-6 lg:p-10 xl:p-10 2xl:p-10 items-center">
      <div className="border-l-4 rounded-lg pl-4 border-[#393939] w-full flex flex-col items-left justify-center">
        <h6 className="font-sans text-lg sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-thin text-[#393939]">
          PSYCHOANALYSIS
        </h6>
        <h1 className=" font-serif font-bold text-3xl sm:text-6xl md:text-7xl xl:text-9xl 2xl:text-9xl text-[#393939] ">
          J.CONCANNON
        </h1>
      </div>
      <nav>
        {/* <Bars3Icon className=" w-16 sm:w-24 md:w-32 lg:w-32 xl:hidden 2xl:hidden   fill-[#393939]" /> */}
        <EllipsisVerticalIcon className="border-r-4 border-[#393939] rounded-lg  w-16 sm:w-24 md:w-32 lg:w-32 xl:hidden 2xl:hidden   fill-[#393939]" />
      </nav>
    </div>
  )
}

export default NavBar
