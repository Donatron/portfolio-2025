// @flow strict
import Link from 'next/link'

import NavLinks from './homepage/navigation/nav-links'

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
            Don Macarthur
          </Link>
        </div>
        <NavLinks />
      </div>
    </nav>
  )
}

export default Navbar
