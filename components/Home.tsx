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
    <div className="rounded-full text-2xl shadow-none shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-100 bg-gray-800 hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] shadow-lg">
      {children}
    </div>
  );
};

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 60,
  backSpeed = 40,
  loop = true,
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
    className="max-w-[70rem] flex justify-left text-left"
  >
    {/* Header */}
    <p className="font-semibold text-7xl 2xl:text-8xl mb-3">
      Hi, I am <br />
      <TypedText
        strings={["Patrik.", "a Software Engineer.", "an Innovator."]}
      />
    </p>
    {/* Text */}
    <p className="text-xl text-zinc-500 max-w-2xl">
      I combine my software engineering expertise and technical project
      management skills to create and drive innovative products.
    </p>

    {/* List */}
    <div className="mt-4 text-sm font-semibold uppercase text-zinc-900 ">
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
          <FaEnvelope className="text-white" />
        </ClickableIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/patriktao/"
        target="_blank"
        rel="noreferrer"
      >
        <ClickableIcon>
          <FaLinkedinIn className="text-white" />
        </ClickableIcon>
      </a>
      <a href="https://github.com/patriktao" target="_blank" rel="noreferrer">
        <ClickableIcon>
          <FaGithub className="text-white" />
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
      className="min-h-[850px] pt-[170px] 2xl:pt-[250px] flex justify-center px-[2rem]"
    >
      <div className="flex flex-col lg:flex-row gap-y-12  gap-x-14 justify-center text-center">
        <div className="2xl:w-[1000px] h-9xl md:col-span-4 lg:col-span-8">
          {InfoSection}
        </div>
        <div>{ImageSection}</div>
      </div>
    </section>
  );
};

export default Home;
