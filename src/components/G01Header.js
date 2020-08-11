import React from 'react';
import "./G01Header.css";

const G01Header = () => {
  return (
    <header className="py-4 flex justify-between">
      <h1 className="text-4xl text-red-400">Marmiton<span className="block text-2xl text-gray-700">by Pol Thomas</span></h1>
      <nav>
        <ul className="sm:flex text-2xl pt-4 pl-4 uppercase tracking-wider text-blue-400">
          <li className="hover:text-red-400"><a href="">Home</a></li>
          <li className="sm:pl-10 hover:text-red-400"><a href="">Favorites</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default G01Header;
