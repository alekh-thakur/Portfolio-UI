import { RiLinkedinLine } from "@remixicon/react";
import React, { useState } from "react";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";

const Footer = ({ dark }) => {
  const socialLinks = [
    {
      icon: <RiLinkedinFill />,
      href: "https://www.linkedin.com/in/code-alekh22/",
      target: "_blank",
    },
    {
      icon: <RiGithubFill />,
      href: "https://github.com/alekh-thakur",
      target: "_blank",
    },
    { icon: <RiMailFill />, href: "mailto:codewithalekh@gmail.com" },
    { icon: <RiPhoneFill />, href: "tel:+91-80572-91899" },
  ];
  const date = new Date().getFullYear();
  const btnClass = `text-2xl px-2 rounded-2xl hover:bg-purple-700/10 border-2 border-purple-700 hover:text-purple-700 transition-all duration-500 ${dark ? "bg-[#4f4b4b9b]" : "bg-white"} py-2`;
  return (
    <div className={`w-full ${dark ? "bg-[#181c2580]" : "bg-[#f1f3f6] "}`}>
      <div className="mx-10  flex items-center justify-center flex-col md:flex-row md:justify-between">
        <div className="mt-5">
          <p>{date} | Developed by Alekh </p>
        </div>
        <div className="flex gap-3 pb-4 mt-5">
          {socialLinks.map(({ icon, href, target },index) => (
            <a key={index} className={btnClass} href={href} target={target}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
