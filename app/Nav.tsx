import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="hidden sm:flex md:flex lg:flex xl:flex 2xl:flex ">
      <ul className="text-[#393939] font-sans font-semibold flex flex-row list-none space-x-4 space-between items-center">
        <li className=" border-l-2 border-r-2 ease-in  duration-50 hover:border-blue-800 rounded-lg px-2 border-gray-300">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className=" border-l-2 border-r-2 ease-in  duration-50 hover:border-blue-800 rounded-lg px-2 border-gray-300">
          <Link href="/resources">RESOURCES</Link>
        </li>
        <li>
          <Link href="/contact">
            <button className="bg-blue-800 font-normal hover:-translate-y-1 duration-200 ease-in-out text-white drop-shadow-lg p-2 rounded-lg">
              CONTACT
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
