import Link from 'next/link'

const NavItems = ({ ulClass, liClass, buttonClass }: any) => {
  return (
    <ul className={ulClass}>
      <li className={liClass}>
        <Link href="/about">ABOUT</Link>
      </li>
      <li className={liClass}>
        <Link href="/resources">RESOURCES</Link>
      </li>
      <li>
        <Link href="/contact">
          <button className={buttonClass}>CONTACT</button>
        </Link>
      </li>
    </ul>
  )
}

export default NavItems
