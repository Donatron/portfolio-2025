import React from 'react'

function NavLink({ href, title }) {
  return (
    <li>
      <a
        className="block px-4 py-2 no-underline outline-none hover:no-underline"
        href={`/#${href}`}
        scroll={false}
      >
        <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
          {title.toUpperCase()}
        </div>
      </a>
    </li>
  )
}

export default NavLink
