import React from "react";

const About = ()=>{
  return(
    <div id="about" className="relative container mx-auto flex flex-col md:flex-row border-b-4 ">
      <div className="pt-10 w-2/4">
        <img src='https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730_1280.png' alt="Picture" className="rounded-full"/>
      </div>
      <div className="p-10 w-2/4 text-xl text-justify my-auto leading-10 shadow-lg rounded-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae, eaque ea sit eligendi voluptas quos corrupti architecto, sapiente reiciendis libero ipsam maxime, molestiae praesentium voluptates sint porro eos adipisci.
      </div>
    </div>
  )
}

export default About;