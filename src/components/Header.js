import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 flex justify-between">
      <h2 className="text-4xl text-red-400">Moovies<span className="block text-2xl text-gray-700">by Pol Thomas</span></h2>
      <nav>
        <ul className="sm:flex text-2xl pt-4 pl-4 uppercase tracking-wider text-blue-400">
          <li className="hover:text-red-400"><Link to="/">Home</Link></li>
          <li className="sm:pl-10 hover:text-red-400"><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
