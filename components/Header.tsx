import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
   <header >
        <nav className=' flex '>
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <ul>
            <li>
                <Link  className='btn'  href="/">
                Home
                </Link>
            </li>
            <li>
                <Link href="/apiexample">
                API Example
                </Link>
            </li>
           
            </ul>
        </nav>


   </header>
  )
}

export default Header