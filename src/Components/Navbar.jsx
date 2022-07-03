import React from 'react';
import CVfile from '../Files/CVfile.pdf';

const Navbar = (props) => {
  let categories = props.getCategories();
  let dropDownCategories = categories.map((category) => {
    let addHashTag = `#${category}`;
    return (
      <a className="dropdown-option" href={addHashTag} key={category}>
        {category}
      </a>
    );
  });

  return (
    <nav className="relative container mx-auto p-6 bg-red-200 rounded-b-md shadow-lg text-white sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="hidden md:block p-2">
          <span className="text-xl">Magdalena Sokołowska</span>
        </div>
        <div className="flex lg:space-x-10 text-lg">
          <a
            href="#about"
            className="hover:bg-red-300 rounded-full pt-2 px-5 cursor-pointer"
          >
            About
          </a>
          <div className="dropdown hover:bg-red-300 rounded-full p-2 px-5 cursor-pointer">
            <button className="dropbtn">Gallery</button>
            <div className="dropdown-content">{dropDownCategories}</div>
          </div>
          <a
            href="#contact"
            className="hover:bg-red-300 rounded-full p-2 px-5 cursor-pointer"
          >
            Contact
          </a>
          <a
            href={CVfile}
            target="_blank"
            download="CV-Magdalena-Sokolowska"
            className="hover:bg-red-300 rounded-full p-2 px-5 cursor-pointer"
            rel="noreferrer"
          >
            My CV
          </a>
        </div>
        {/* <div className='p-2 border rounded-md border-white md:hidden'>
          
        </div> */}
        <div className="hidden lg:block flex space-x-5 text-xl">
          <a
            href="mailto:m.sokolowska16@gmail.com"
            target="_blank"
            className="hover:animate-ping hover:scale-110"
            rel="noreferrer"
          >
            <i className="fas fa-envelope-square"></i>
          </a>
          <a
            href="https://www.behance.net/magdalesokoow1"
            target="_blank"
            className="hover:animate-ping hover:scale-110"
            rel="noreferrer"
          >
            <i className="fab fa-behance"></i>
          </a>
          <a
            href="https://www.instagram.com/fot.sokolowska/"
            target="_blank"
            className="hover:animate-ping hover:scale-110"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
