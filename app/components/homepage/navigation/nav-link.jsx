import React from 'react'
import Link from 'next/link'

function NavLink({ id, href, title }) {
  return (
    <li key={`nav-item-${id}`}>
      <Link
        className="block px-4 py-2 no-underline outline-none hover:no-underline"
        href={`/#${href}`}
      >
        <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
          {title.toUpperCase()}
        </div>
      </Link>
    </li>
  )
}

export default NavLink
