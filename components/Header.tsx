import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <span className="text-2xl font-bold text-gray-800">MyApp</span>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="text-gray-800 hover:text-gray-600 font-semibold transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/apiexample" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              API Example
            </Link>
          </li>
          <li>
            <Link href="/form" className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
              Database
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
