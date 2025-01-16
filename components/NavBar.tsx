import React, { useContext, useEffect } from "react";
import getConfig from "next/config";
import useScrollspy from "@/hooks/useScrollspy";
import { Fade } from "react-awesome-reveal";
import { replaceState } from "history-throttled";
import { ThemeContext } from "@/contexts/ThemeContext";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const ids = [
  "home",
  "about",
  "skills",
  "experience",
  "extracurricular",
  "portfolio",
];

const menuItemClass = `font-medium md:hover:bg-transparent md:border-0 md:p-0  md:hover:bg-gradient-to-r from-green-400 to-[--color-theme] md:hover:bg-clip-text md:hover:text-transparent`;
const selectedMenuItemClass = `underline font-medium md:border-0 md:p-0`;

const NavItem = ({ name, className }: { name: string; className?: string }) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li>
      <button
        onClick={() => handleClick(name.toLowerCase())}
        className={className}
      >
        {name}
      </button>
    </li>
  );
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const NavBar = () => {
  const { publicRuntimeConfig } = getConfig();
  const pdfPath = publicRuntimeConfig.PDF_PATH;

  const activeId = useScrollspy(ids, 300);

  return (
    <nav className="fixed left-0 w-full z-50 border border-t-0 border-neutral-150 white/10">
      <div className="px-5 backdrop-blur-[12px] bg-white">
        <div className="flex w-full justify-between items-center h-14">
          <a href="#home">
            <span className="text-xl font-semibold whitespace-nowrap text-black hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] hover:bg-clip-text hover:text-transparent hover:scale-110 ease-out duration-100">
              Patrik Thomas Tao
            </span>
          </a>
          {/* Links */}
          <div className="hidden lg:flex">
            <ul className="flex flex-row space-x-14 text-md 2xl:text-lg items-center">
              {ids.map((id) => (
                <NavItem
                  name={capitalize(id)}
                  key={id}
                  className={
                    id === activeId ? selectedMenuItemClass : menuItemClass
                  }
                />
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            {/* Resume button */}
            <a href={pdfPath} target="_blank" rel="noopener noreferrer">
              <button className="text-md font-semibold text-white bg-gray-700 hover:scale-95 ease-out duration-100 py-1 px-3 rounded-md inline-flex items-center hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] ">
                <svg
                  className="fill-current w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Get Resume</span>
              </button>
            </a>
            {/* Theme switcher, hidden on mobile */}
            {/*             <label className="relative flex items-center cursor-pointer ">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={getTheme() === "light" ? false : true}
                onChange={themeSwitch}
              />
              <div className="w-[64px] h-[33px] bg-teal-100 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-teal-400 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-teal-400  after:border-teal-400 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-teal-900 z-10">
                <div className="grid grid-cols-2 h-8">
                  <BsMoonStarsFill
                    className="relative left-[38px] top-[8px] z-20 col-span-1"
                    visibility={getTheme() === "light" ? "hidden" : "block"}
                  />
                  <BsSunFill
                    className="col-span-1 relative right-[22px] top-[8px] z-20"
                    visibility={getTheme() === "light" ? "block" : "hidden"}
                  />
                </div>
              </div>
            </label> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
