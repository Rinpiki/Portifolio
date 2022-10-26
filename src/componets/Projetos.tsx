import React from 'react';
import burgue from '../assets/img/burgue.png';

function Projetos() {
  return (
    <div className="mb-72 flex flex-col items-center ">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold text-[#445964] mdx:text-5xl text-center">
          Meus
          <span className="text-[#263138]"> Projetos</span>
        </h2>
        <p className="text-[#445964] font-medium text-base mt-2 text-center mdx:text-xl">
          Estes são alguns dos trabalhos e projetos que já realizei
        </p>
      </div>
      <div id="grid" className="">
        <div className="flex flex-col w-80 p-4 bg-[#FBFBFB] drop-shadow-lg rounded-md">
          <img
            src={burgue}
            alt="img de site de burgue"
            className="mb-4 rounded-md"
          />
          <h2 className="mb-2 text-[#263138] font-bold text-lg">KingBurgue</h2>
          <p className="text-[#445964] font-medium">
            Site sobre uma loja de fast-food, nele você pode encontrar todas as
            informações necessárias sobre a loja em questão.
          </p>
          <div className="flex mt-4 mb-4 justify-between text-[#ffff]">
            <span className="bg-[#445964] p-2 rounded-lg">Code</span>
            <span className="bg-[#445964] p-2 rounded-lg">View</span>
          </div>
        </div>
        <div className="flex flex-col w-80 p-4 bg-[#FBFBFB] drop-shadow-lg rounded-md">
          <img
            src={burgue}
            alt="img de site de burgue"
            className="mb-4 rounded-md"
          />
          <h2 className="mb-2 text-[#263138] font-bold text-lg">KingBurgue</h2>
          <p className="text-[#445964] font-medium">
            Site sobre uma loja de fast-food, nele você pode encontrar todas as
            informações necessárias sobre a loja em questão.
          </p>
          <div className="flex mt-4 mb-4 justify-between text-[#ffff]">
            <span className="bg-[#445964] p-2 rounded-lg">Code</span>
            <span className="bg-[#445964] p-2 rounded-lg">View</span>
          </div>
        </div>
        <div className="flex flex-col w-80 p-4 bg-[#FBFBFB] drop-shadow-lg rounded-md">
          <img
            src={burgue}
            alt="img de site de burgue"
            className="mb-4 rounded-md"
          />
          <h2 className="mb-2 text-[#263138] font-bold text-lg">KingBurgue</h2>
          <p className="text-[#445964] font-medium">
            Site sobre uma loja de fast-food, nele você pode encontrar todas as
            informações necessárias sobre a loja em questão.
          </p>
          <div className="flex mt-4 mb-4 justify-between text-[#ffff]">
            <span className="bg-[#445964] p-2 rounded-lg">Code</span>
            <span className="bg-[#445964] p-2 rounded-lg">View</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
