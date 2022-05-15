import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="relative container mx-auto flex flex-col md:flex-row border-b-4 "
    >
      <div className="pt-10 w-2/4">
        <img
          src="https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730_1280.png"
          alt="Picture"
          className="rounded-full"
        />
      </div>
      <div className="p-10 w-2/4 text-lg text-justify my-auto leading-10 shadow-lg rounded-xl leading-relaxed">
        <span className="text-xl">What can I do for you?</span><br/><br/>
        <span>I'm the most comfortable with creating
        Mock-ups and Vector Graphics, however I can do a lot more! </span>
        <br/><br/>
        <span>I'm currently at the start of my career as Graphic Designer and I'm looking 
        for opportunities to broaden my portfolio and experiences.</span> 
        <br/><br/>
        <span>Below you can find some of my projects. Feel free to get in touch with me by E-mail or sign a form.</span>
      </div>
    </div>
  );
};

export default About;
