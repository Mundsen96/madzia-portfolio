import React from 'react';

const Footer = () => {
  return (
    <footer className="relative container mx-auto p-10 text-white text-center bg-red-200 space-y-1.5 text-xl rounded-t-md ">
      <h3 className="">Let's Work Together!</h3>
      <p>Find me on:</p>
      <p className="space-x-5">
        <a href="https://www.behance.net/magdalesokoow1" target="_blank">
          <i className="fab fa-behance"></i>
        </a>
        <a href="https://www.instagram.com/fot.sokolowska/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:m.sokolowska16@gmail.com" target="_blank">
          <i className="fas fa-envelope-square"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
