'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <div><>

    <section className="lightning-bg min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl p-15 mb-4 font-bold text-white">
            I am a
            <br className="hidden lg:inline-block"/>
            <Typewriter
  options={{
    strings: ['Next.js and React.js Developer','A Typescript Developer','Gen-AI enthusiast'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
          
          <p className="mb-8 leading-relaxed">
          
"I am currently an undergraduate student pursuing a degree in Computer Science at the 
University of Karachi. Alongside my regular coursework,I am actively engaged in a course focused on Web 3.0 technologies. What truly captivates me
in this field is the fascinating realm of generative-AI. I really like the idea of machines
being able to make things and come up with new ideas on their own. It's exciting and has a 
lot of promise for the future of technology.."
          </p>        <p>


          </p>
          <div className="flex justify-centre py-8 ">
            <Link href={"#Contact"}>
            <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:scale-100 duration-150 rounded text-lg">
              Contact
            </button></Link>
        
          </div>
        </div>
        {<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full border-8 border-blue-400
            "
            alt="hero"
            height={400}
            width={400}
            src={require("../../../public/ZAID-removebg (1).jpg")}
        
          />
        </div> }
      </div>
    </section>
    <p />
  </>
  </div>
  );
};

export default Hero;