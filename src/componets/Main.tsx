import React from 'react';
import Manpc from '../assets/img/Manpc.svg';
import Git from '../assets/icons/Git.svg';
import Linkedin from '../assets/icons/Linkedin.svg';

function Main() {
  return (
    <main className="flex flex-col sm:flex-row-reverse">
      <img
        src={Manpc}
        alt="programing man"
        className="w-11/12 h-auto mx-auto mb-2"
      />
      <div className="text-[#445964] w-11/12 mx-auto ">
        <span className="font-medium">Olá pessoas, </span>
        <h1 className="font-extrabold text-3xl mt-[2px] mb:text-4xl">
          EU SOU UM PROGRAMADOR
        </h1>
        <span className="font-medium ">
          Seja bem-vindo ao meu portifólio website
        </span>
        <br />
        <span className="text-[#FFFFFF] bg-[#263138] py-[8px] px-[16px] inline-block mt-4 rounded-xl font-semibold">
          Saiba mais sobre mim
        </span>
        <div className="flex mt-6">
          <a href="/#">
            <img src={Git} alt="icone github" className="w-7 mr-3" />
          </a>
          <a href="/#">
            <img src={Linkedin} alt="icone Linkedin" className="w-7" />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
