import React from 'react';
import hexagon from '../assets/icons/hexagon.png';

function Sobre() {
  return (
    <section className="flex flex-col items-center mt-16 mb-48">
      <div className="flex flex-col text-center justify-center items-center">
        <img
          src={hexagon}
          id="hex"
          alt="icone de trofeu"
          className="w-24 h-auto lgg:w-28 "
        />
        <h1 className="text-5xl font-bold text-[#445964] mb-3 mdx:text-6xl lgg:text-7xl">
          Marcos
          <span className="text-[#263138]"> Pablo</span>
        </h1>
        <span className=" text-[#445964] font-medium text-base lgg:text-2xl">
          Meu nome é Marcos Pablo👋 Eu sou do Brasil, Trindade/Goias.
        </span>
        <span className="text-[#445964] font-medium text-base lgg:text-2xl">
          Sou desenvolverdor front-end, gosto muito de criar aplicações web.
        </span>
      </div>
    </section>
  );
}

export default Sobre;
