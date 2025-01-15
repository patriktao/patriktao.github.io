import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import image2 from "../images/image2.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

type Props = {};

interface Icon {
  children: any;
  className?: string;
}

type TypedTextProps = {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
};

const ClickableIcon = ({ children }: Icon) => {
  return (
    <div className="rounded-full text-2xl shadow-none dark:shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-100 bg-gray-800 dark:bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] shadow-lg">
      {children}
    </div>
  );
};

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 60,
  backSpeed = 30,
  loop = false,
}) => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    });

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={typedRef} />;
};

const InfoSection = (
  <Fade
    delay={1000}
    cascade
    damping={0.1}
    duration={1500}
    triggerOnce
    className="flex justify-left 2xl:justify-center max-w-3xl text-left 2xl:text-center"
  >
    {/* Header */}
    <p className="font-semibold text-7xl lg:text-8xl dark:text-white mb-3">
      Hi, I am <br />
      <TypedText
        strings={[
          "Patrik.",
          "a Software Engineer.",
          "an Innovator.",
          "Patrik.",
        ]}
      />
    </p>
    {/* Text */}
    <p className="text-xl text-zinc-500 dark:text-gray-300 max-w-2xl">
      I combine my software engineering expertise and technical project
      management skills to create and drive innovative products.
    </p>

    {/* List */}
    <div className="mt-4 text-sm font-semibold uppercase text-zinc-900 dark:text-white">
      <p className="my-1">M.Sc.Eng, Computer Science and Engineering</p>
      <p className="my-1">Specialization: Software Engineering</p>
      <p className="my-1">Lund University, Sweden</p>
    </div>
    <div className="flex gap-8 max-w-[330px] py-6">
      <a
        href="#"
        onClick={(e) => {
          window.location.href = "mailto:patriktao@gmail.com";
          e.preventDefault();
        }}
        target="_blank"
        rel="noreferrer"
      >
        <ClickableIcon>
          <FaEnvelope className="text-white dark:text-black" />
        </ClickableIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/patriktao/"
        target="_blank"
        rel="noreferrer"
      >
        <ClickableIcon>
          <FaLinkedinIn className="text-white dark:text-black" />
        </ClickableIcon>
      </a>
      <a href="https://github.com/patriktao" target="_blank" rel="noreferrer">
        <ClickableIcon>
          <FaGithub className="text-white dark:text-black" />
        </ClickableIcon>
      </a>
    </div>
  </Fade>
);

const ImageSection = (
  <Fade delay={1500} duration={1000} triggerOnce>
    <Image
      data-tooltip-target="tooltip-default"
      src={image2}
      alt="profile"
      className="max-w-[280px] xl:max-w-[320px]"
    />
  </Fade>
);

const Home = (props: Props) => {
  return (
    <section
      id="home"
      className="h-[850px] pt-[120px] lg:pt-[250px] flex justify-center p-0"
    >
      <div className="max-w-10xl flex flex-col lg:flex-row gap-10 justify-center text-center">
        <div className="md:col-span-4 lg:col-span-8">{InfoSection}</div>
        <div>{ImageSection}</div>
      </div>
    </section>
  );
};

export default Home;
