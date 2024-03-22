import React from 'react'
import Link from "next/link";

const BackButton = () => {
  return (
    <div className="container m-8 absolute">
      <Link href="/">
        <svg
          class="w-10 h-10 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </Link>
    </div>
  )
}

export default BackButton
