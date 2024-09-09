import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
   <header>
        <nav>
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <ul>
            <li>
                <Link href="/">
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/apiexample">
                <a>API Example</a>
                </Link>
            </li>
           
            </ul>
        </nav>


   </header>
  )
}

export default Header