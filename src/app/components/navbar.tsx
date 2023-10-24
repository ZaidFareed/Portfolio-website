import Link from 'next/link'
import React from 'react'
import { MdDownloadForOffline } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white z-50 sticky top-0"><header className="text-white body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        
        <span className=" mx-5 ml-3 text-2xl font-bold">Zaid Fareed</span>
      </a>
<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
<Link href ={"/"} className="mx-5 text-2xl font-bold hover:scale-150 duration-500">Home</Link>
<Link href={"#About"}className="mx-5 text-2xl font-bold hover:scale-150 duration-500">About</Link>
<Link href={"#Skills"}className="mx-5 text-2xl font-bold hover:scale-150 duration-500">Skills</Link>
<Link href={"#Interests"}className="mx-5 text-2xl font-bold hover:scale-150 duration-500">Interests</Link>
<Link href={"#Contact"}className="mx-5 text-2xl font-bold hover:scale-150 duration-500">Contact</Link>

      </nav>
     
    </div>
  </header></div>
  )
}

export default Navbar