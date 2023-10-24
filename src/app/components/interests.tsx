import React from 'react';
import Image from 'next/image';

const Interests = () => {
  return (
    <div id="Interests">
      <section className="lightning-bg min-h-screen flex items-center justify-center text-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-4xl font-bold text-center title-font text-white mb-4">
              My Interests
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              In my portfolio, you'll discover my keen interest in diving into the latest trends in the digital landscape. While Web 3.0, Langchain, blockchain technologies, and prompt engineering are areas I'm actively learning and working on, they represent my ongoing journey of exploration and growth. These technologies embody the cutting edge of the tech world, and I'm dedicated to expanding my knowledge and experience in these domains. Join me on this exciting quest, and together, we'll navigate the ever-evolving digital realm.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              className="object-cover object-center rounded-full border-8 border-blue-900"
              alt="Web 3.0"
              height={400}
              width={300}
              src={require("../../../public/web3.png")}
            />
            <Image
              className="object-cover object-center rounded-full border-8 border-blue-900"
              alt="AI"
              height={400}
              width={300}
              src={require("../../../public/AI.jpg")}
              style={{ margin: "0 20px" }}
            />
            <Image
              className="object-cover object-center rounded-full border-8 hover:bg-gray-800 hover:scale-100 duration-150  border-blue-900 "
              alt="Blockchain"
              height={400}
              width={300}
              src={require("../../../public/blockchain.jpg")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interests;
