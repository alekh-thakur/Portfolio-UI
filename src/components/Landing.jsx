import React from "react";
import { RiDownload2Line } from "react-icons/ri";
import main from "../assets/main.jpeg";
import Resume from "../assets/Resume.pdf"
const Landing = ({dark}) => {
  return (
    <section id="home" className={`w-full ${dark ? "bg-black" : "bg-white"} `}>
      <div className=" flex flex-col md:flex-row md:justify-around items-center mx-7 mt-40 lg:mt-0 lg:h-screen pb-40 ">
        <div data-aos="fade-right" data-aos-duration="1500" className="">
        <p className="text-purple-700 text-xl mx-7 font-bold my-2">Hello, I am</p>
        <h1 className="text-7xl my-2 mx-7">Alekh</h1>
        <h3 className="my-2 text-3xl mx-7 opacity-40 ">
          Aspiring full-stack developer
        </h3>
        <p className="opacity-60 mx-7">
          A Frontend Developer focused on creating seamless user experiences.{" "}
          <br />
          On a journey to master full-stack development.
        </p>
        <div className="mt-7  flex flex-row md:flex-row justify-center md:justify-start items-center md:mx-7">
          <a href={Resume} target="_blank" className="cursor-pointer flex flex-row items-center bg-purple-700 px-3 py-2 mb-3 rounded-xl text-white ">
            <RiDownload2Line className="mr-2" />
            Download Resume
          </a>
          <button className="cursor-pointer  border-2 border-purple-700 ml-4 px-3 py-2 mb-3 rounded-xl">
            <a href="#contact">Get in Touch</a>
          </button>
        </div>
      </div>
      <div>
        <div data-aos="zoom-in" data-aos-duration="1500" className="mt-18 md:mt-0">
          <img
            className="flex justify-center md:h-80 md:w-80 h-60 w-60  object-cover rounded-[50%] shadow-[0_0_94px_0] shadow-purple-700"
            src={main}
            alt=""
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Landing;
