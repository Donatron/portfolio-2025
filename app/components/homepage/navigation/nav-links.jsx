import React from 'react'

import NavLink from './nav-link'

const navItems = [
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Experience',
    href: 'experience',
  },
  {
    title: 'Skills',
    href: 'skills',
  },
  {
    title: 'Education',
    href: 'education',
  },
  {
    title: 'Achievements',
    href: 'projects',
  },
]

function NavLinks() {
  return (
    <ul
      className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
      id="navbar-default"
    >
      {navItems.map((item, i) => (
        <NavLink key={i} href={item.href} title={item.title} />
      ))}
    </ul>
  )
}

export default NavLinks
