import Image from "next/image";
import React from "react";
import aboutme from "../images/aboutme.jpg";
import { Fade } from "react-awesome-reveal";

type Props = {};

const infoSection = (
  <Fade cascade damping={0.1} duration={1000} triggerOnce direction="up">
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">About Me</h1>
    <p className="mt-2 text-lg font-regular leading-6 text-zinc-500">
      Software Engineer, Tech Program Manager, and Innovator
    </p>
    <p className="mt-6 mb-6 font-regular text-lg leading-8 text-zinc-700">
      I was born in Helsingborg, a coastal city located in the southern part of
      Sweden. Since discovering my first programming class in high school, I
      have been captivated by the art of coding and the ability to create
      products that have social impact.
    </p>
    <p className="mt-6 mb-6 text-lg font-regular leading-8 text-zinc-700">
      In my free time, I channel my creativity and imagination into making
      music, experimenting in the kitchen, exploring new places through travel,
      and dreaming up my next creative endeavor.
    </p>
  </Fade>
);

const imgSection = (
  <Fade delay={250} duration={1000} triggerOnce>
    <Image className="rounded-lg grid items-center" src={aboutme} alt="hbg" />
  </Fade>
);

const About = (props: Props) => {
  return (
    <section
      id="about"
      className="block grid relative lg:mt-0 opacity-1 transform-none bg-[#f7f7f7]"
    >
      <div className=" max-w-5xl mx-auto gap-x-12 items-center">
        <div title="info-section">{infoSection}</div>
      </div>
    </section>
  );
};

export default About;
