import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between p-4 bg-gray-800 text-white sm:flex-row">
      <p className="text-sm">© 2024 Next.js Freestyle</p>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={50} height={50} className="cursor-pointer" />
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
            Home
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
