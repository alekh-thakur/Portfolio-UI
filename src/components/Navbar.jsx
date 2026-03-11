import { useState, useEffect } from "react";
import { RiMoonFill, RiSunFill, RiMenuLine, RiCloseLine } from "react-icons/ri";

const Navbar = ({ dark, setDark }) => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navStyle = (section) =>
    `cursor-pointer transition-all duration-200 ${
      active === section
        ? "border-b-2 border-purple-500"
        : "hover:text-purple-400"
    }`;

  const handleNavClick = (section) => {
    setActive(section);
    setOpen(false); 
  };

  return (
    <div
      className={`flex justify-between items-center fixed top-0 left-0 w-full ${
        dark ? "bg-black text-white" : "bg-white text-black"
      } z-50 px-6 md:px-10 h-16 shadow-md`}
    >
      
      <h1 className="text-2xl  md:text-3xl font-bold text-purple-700">
        Alekh.
      </h1>

     
      <ul className="hidden md:flex items-center gap-6  text-sm mx-5">
        <button className="cursor-pointer" onClick={() => setDark(!dark)}>
          {dark ? <RiSunFill /> : <RiMoonFill />}
        </button>

        {["home","about","skills","projects","contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={navStyle(item)}
              onClick={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

    
      <div
        className="md:hidden text-2xl cursor-pointer flex items-center"
        onClick={() => setOpen(!open)}
      >
        {open ? <RiCloseLine /> : <RiMenuLine />}
      </div>

      
      <div
        className={`absolute top-16 left-0 w-full ${
          dark ? "bg-black" : "bg-white"
        } flex flex-col items-center gap-5 py-5 md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <button onClick={() => setDark(!dark)}>
          {dark ? <RiSunFill /> : <RiMoonFill />}
        </button>

        {["home","about","skills","projects","contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={navStyle(item)}
            onClick={() => handleNavClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;