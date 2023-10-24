import React from 'react'
import Link from 'next/link';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
const Footer = () => {
  return (
    <>
 
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
   
          <span className="ml-3 text-xl">Zaid Fareed</span>
        </a>
        {/* <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
        @gmail.com
      
        </p> */}
  
<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
       
       <Link
       target="_blank"
       href={"https://www.linkedin.com/in/zaid-fareed-146708262/"}
>
         
         <BsLinkedin className ="text-3xl hover:text-[#2563eb]"/>
</Link>
</span>
<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
       
       <Link
       target="_blank"
       href={"https://www.instagram.com/zaidfareed/</span>"}
>
         
         <BsInstagram className ="text-3xl hover:text-[#9f1239]"/>
</Link>
</span>
<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start hover-scale duration-75">
       
       <Link
       target="_blank"
       href={"https://www.facebook.com/zaid%20fareed"}
>
  
         
         <BsFacebook className ="text-3xl hover:text-[#2563eb]"/>
</Link>
</span>
          
        
      </div>
    </footer>
    <p />
  </>
  )}
export default Footer