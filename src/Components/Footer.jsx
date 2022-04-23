import React from "react";

const Footer = ()=>{
  return(
    <footer className="relative container mx-auto p-10 text-white text-center bg-red-200 space-y-1.5 text-xl rounded-t-md">
      <h3 className="">Let's Work Together!</h3>
      <p>Find me on:</p>
      <p className="space-x-5">
        <a href="#" target='_blank'><i className="fab fa-pinterest"></i></a>
        <a href="#" target='_blank'><i className="fab fa-instagram"></i></a>
        <a href="#" target='_blank'><i className="fas fa-envelope-square"></i></a>
      </p>
    </footer>
  )
}

export default Footer;