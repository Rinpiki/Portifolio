import React from 'react';
import Firsticon from '../assets/icons/Firsticon.svg';

function Header() {
  return (
    <header className="flex text-[#445964] justify-between w-full items-center p-2 ">
      <div className="flex text-[#445964] items-center mt-2 md:mt-4">
        <img
          src={Firsticon}
          alt="logo"
          className="w-[32px] h-[32px] sm:w-[45px] sm:h-[40px]"
        />
        <h1 className=" text-xl sm:text-2xl ml-1 font-bold">Marcos Pablo</h1>
      </div>

      <ul className="space-x-6 hidden tablet:flex text-xs font-medium mt-2 md:mt-4 md:text-base">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#shadow">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marcos-pablo-09bb83243">
            Contato
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
