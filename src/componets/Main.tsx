import React from 'react';
import Manpc from '../assets/img/Manpc.svg';
import Git from '../assets/icons/Git.svg';
import Linkedin from '../assets/icons/Linkedin.svg';

function Main() {
  return (
    <main
      id="home"
      className="flex flex-col mdx:flex-row-reverse mdx:mt-12 mdx:items-center"
    >
      <img
        src={Manpc}
        alt="programing man"
        className="zero:w-11/12 h-auto mb-2 mdx:w-[384px] lg:hidden"
      />
      <img
        src={Manpc}
        alt="programing man"
        className="hidden lg:flex lg:w-[500px] xll:w-[550px]"
      />
      <div className="text-[#445964] w-11/12 mx-auto ">
        <span className="font-medium mbx:text-xl lgg:text-3xl">
          Olá pessoas,
        </span>
        <h1 className="font-extrabold text-3xl mt-[2px] mb:text-4xl mbx:text-5xl mbx:leading-[50px] lgg:text-6xl xll:text-7xl lgg:mt-4">
          EU SOU UM PROGRAMADOR
        </h1>
        <span className="font-medium mbx:text-xl xll:text-2xl">
          Seja bem-vindo ao meu portifólio website
        </span>
        <br />
        <span className="text-[#FFFFFF] bg-[#263138] py-[8px] px-[16px] inline-block mt-4 rounded-xl font-semibold mbx:text-xl mdx:mt-[40px] xll:text-2xl lgg:mb-10">
          Saiba mais sobre mim
        </span>
        <div className="flex mt-6 mdx:mt-[30px]">
          <a href="https://github.com/Rinpiki">
            <img src={Git} alt="icone github" className="w-7 mr-3 mbx:w-9" />
          </a>
          <a href="https://www.linkedin.com/in/marcos-pablo-09bb83243">
            <img src={Linkedin} alt="icone Linkedin" className="w-7 mbx:w-9" />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
