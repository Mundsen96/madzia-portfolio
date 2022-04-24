import React from "react";

const Navbar = ()=>{
  return(
    <nav className="relative container mx-auto p-6 bg-red-200 rounded-b-md shadow-lg text-white sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="p-2">
          <span className="text-xl">Magdalena Sokołowska</span>
        </div>
        <div className="hidden md:flex space-x-20 text-lg">
          <a href="#about" className="hover:bg-red-300 rounded-full pt-2 px-5 cursor-pointer">About</a>
          <a href="#gallery" className="hover:bg-red-300 rounded-full p-2 px-5 cursor-pointer">Gallery</a>
          <a href="#" className="hover:bg-red-300 rounded-full p-2 px-5 cursor-pointer">Contact</a>
        </div>
        <div className="hidden md:flex space-x-5 text-xl">
        <a href="#" target='_blank' className="hover:animate-ping hover:scale-110"><i className="fab fa-pinterest"></i></a>
        <a href="#" target='_blank' className="hover:animate-ping hover:scale-110"><i className="fab fa-instagram"></i></a>
        <a href="#" target='_blank' className="hover:animate-ping hover:scale-110"><i className="fas fa-envelope-square"></i></a>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;