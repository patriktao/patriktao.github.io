import getConfig from "next/config";
import useScrollspy from "@/hooks/useScrollspy";

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
const { publicRuntimeConfig } = getConfig();

const resumeButton = () => {
  return (
    <div className="flex gap-4">
      <a
        href={publicRuntimeConfig.PDF_PATH}
        target="_blank"
        rel="noopener noreferrer"
      >
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
    </div>
  );
};

const NavBar = () => {
  const activeId = useScrollspy(ids, 300);

  return (
    <nav className="fixed left-0 w-full z-50 border border-t-0 border-neutral-150 white/10">
      <div className="px-5 backdrop-blur-[12px] bg-white">
        <div className="relative flex w-full items-center justify-center h-14">
          {/* Left-aligned name with absolute positioning */}
          <button
            onClick={() => {
              const element = document.getElementById("home");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="absolute left-5 text-xl font-semibold text-black whitespace-nowrap hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] hover:bg-clip-text hover:text-transparent hover:scale-110 ease-out duration-100"
          >
            Patrik Thomas Tao
          </button>

          {/* Centered nav items */}
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
      </div>
    </nav>
  );
};

export default NavBar;
