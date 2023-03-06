'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import NavItems from './NavItems'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleParentClick = (event: any) => {
    event.preventDefault()

    if (event.target === event.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <EllipsisVerticalIcon
        className="border-r-4 border-[#393939] rounded-lg  w-16 sm:hidden md:w-hidden lg:hidden xl:hidden 2xl:hidden fill-[#393939]"
        onClick={() => setIsOpen(!isOpen)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="shadow-inner backdrop-blur-2xl flex flex-col items-end text-right justify-start absolute w-full h-screen top-24 right-0"
            onClick={handleParentClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <NavItems
              ulClass="w-1/2 rounded-lg p-6 text-stone-400 font-sans font-semibold flex flex-col list-none space-y-6 space-between text-xl"
              liClass="active:text-blue-400 border-r-2 ease-in duration-50 border-[#393939] hover:underline rounded-sm px-2 hover:text-[#393939] hover:border-stone-400"
              buttonClass="bg-blue-700 hover:bg-blue-900 font-normal active:scale-95 duration-100 ease-in-out text-white drop-shadow-lg p-2 rounded-md"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavMobile
