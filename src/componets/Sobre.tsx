import React from 'react';
import hexagon from '../assets/icons/hexagon.png';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import javascript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import tailwind from '../assets/icons/tailwind.svg';
import typee from '../assets/icons/type.svg';
import next from '../assets/icons/next.svg';

function Sobre() {
  return (
    <section
      id="shadow"
      className="flex flex-col items-center mt-16 mb-16 mdx:mb-32"
    >
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
          Meu nome é Marcos Pablo👋 Eu moro no Brasil, Trindade/Goias.
        </span>
        <span className="text-[#445964] font-medium text-base lgg:text-2xl">
          Sou desenvolvedor front-end, adoro programar e estou nessa já faz 1
          ano.
        </span>
      </div>
      <div className="mt-9 flex flex-col text-center justify-center items-center">
        <h3 className="text-4xl font-bold text-[#445964] mdx:text-5xl">
          Minhas
          <span className="text-[#263138]"> Techs</span>
        </h3>
        <div>
          <p className="text-[#445964] font-medium text-base mt-3 mdx:text-xl">
            Tecnologias
          </p>
          <p className="text-[#445964] font-bold text-2xl mt-1 mdx:text-4xl">
            Já
            <span className="text-[#000000]"> utilizadas</span>
          </p>
          <div className="flex mt-2 space-x-4">
            <img src={html} id="iconSobre" alt="icon type" />
            <img src={css} id="iconSobre" alt="icon type" />
            <img src={javascript} id="iconSobre" alt="icon type" />
            <img src={react} id="iconSobre" alt="icon type" />
            <img src={tailwind} id="iconSobre" alt="icon type" />
          </div>
        </div>
        <div className="flex flex-col text-center justify-center items-center">
          <p className="text-[#445964] font-medium text-base mt-8">
            Tecnologias
          </p>
          <p className="text-[#445964] font-bold text-2xl mt-1">
            Atualmente
            <span className="text-[#000000]"> Desenvolvendo</span>
          </p>
          <div className="flex mt-2 mb-4">
            <img
              src={typee}
              alt="icon type"
              className="w-10 h-auto mr-1 mdx:w-14"
            />
            <img src={next} id="iconSobre" alt="icon type" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
