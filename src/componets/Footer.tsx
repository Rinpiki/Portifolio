import React from 'react';

function Footer() {
  return (
    <footer className="flex text-[#445964] font-semibold items-center justify-center flex-col p-2 text-center">
      <ul className="flex space-x-4 mb-2">
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
      <p className="text-[#3c4f58]">©2022 Marcos Pablo | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
