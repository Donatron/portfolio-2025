import React from 'react'

function CustomErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="12" fill="#121212" />
      <path
        d="M8 8l8 8M16 8l-8 8"
        stroke="#e74c3c"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CustomErrorIcon
