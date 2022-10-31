import React from 'react';
import burgue from '../assets/img/burgue.png';
import boldo from '../assets/img/boldo.png';
import cartao from '../assets/img/cartao.png';

function Projetos() {
  return (
    <div id="projetos" className="mb-28 flex flex-col items-center ">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold text-[#445964] mdx:text-5xl text-center">
          Meus
          <span className="text-[#263138]"> Projetos</span>
        </h2>
        <p className="text-[#445964] font-medium text-base mt-2 text-center mdx:text-xl">
          Estes são alguns dos trabalhos e projetos que já realizei
        </p>
      </div>
      <div id="grid">
        <div className="flex flex-col w-80 p-4 hover:scale-110 duration-300 bg-[#FBFBFB] drop-shadow-lg rounded-md">
          <img
            src={burgue}
            alt="img de site de burgue"
            className="mb-4 rounded-md"
          />
          <h2 className="mb-2 text-[#263138] font-bold text-lg">KingBurgue</h2>
          <p className="text-[#445964] font-medium">
            Site sobre uma loja de fast-food, nele você pode encontrar todas as
            informações necessárias sobre a loja.
          </p>
          <div className="flex mt-4 mb-4 justify-between text-[#ffff]">
            <span className="bg-[#445964] p-2 rounded-lg">
              <a href="https://github.com/Rinpiki/Empire-burger">Code</a>
            </span>
            <span className="bg-[#445964] p-2 rounded-lg">
              <a href="https://empire-burgue.vercel.app/">View</a>
            </span>
          </div>
        </div>
        <div className="flex flex-col hover:scale-110 duration-300 w-80 p-4 bg-[#FBFBFB] drop-shadow-lg rounded-md">
          <img
            src={boldo}
            alt="img de site de burgue"
            className="mb-4 rounded-md"
          />
          <h2 className="mb-2 text-[#263138] font-bold text-lg">Boldo</h2>
          <p className="text-[#445964] font-medium">
            Boldo é uma simples pagina web feita para colocar os meus
            conhecimentos em pratica.
          </p>
          <div className="flex mt-4 mb-4 justify-between text-[#ffff]">
            <span className="bg-[#445964] p-2 rounded-lg">
              <a href="https://github.com/Rinpiki/Pagina-Boldo">Code</a>
            </span>
            <span className="bg-[#445964] p-2 rounded-lg">
              <a href="https://fantastic-puffpuff-3a816f.netlify.app/">View</a>
            </span>
          </div>
        </div>
        <div className="flex flex-col hover:scale-110 duration-300 w-80 p-4 bg-[#FBFBFB] drop-shadow-lg rounded-md">
          <img
            src={cartao}
            alt="img de site de burgue"
            className="mb-4 rounded-md"
          />
          <h2 className="mb-2 text-[#263138] font-bold text-lg">
            Gerador de conselhos
          </h2>
          <p className="text-[#445964] font-medium">
            Um belo cartão com conselhos que consome uma API para mostrar vários
            conselhos com um click.
          </p>
          <div className="flex mt-4 mb-4 justify-between text-[#ffff]">
            <span className="bg-[#445964] p-2 rounded-lg">
              <a href="https://github.com/Rinpiki/cartao-de-conselhos">Code</a>
            </span>
            <span className="bg-[#445964] p-2 rounded-lg">
              <a href="https://stellar-salmiakki-e3ab7b.netlify.app/">View</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
