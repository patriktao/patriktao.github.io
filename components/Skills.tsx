import React from "react";
import SkillList from "./SkillList";
import { BsClipboardDataFill, BsCodeSquare } from "react-icons/bs";
import { FaCodeBranch, FaCube, FaEdit } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      id="skills"
      className="grid justify-start lg:justify-center text-center mt-44 md:mt-0"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-1 lg:gap-y-10">
        <Fade duration={1000} triggerOnce cascade damping={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left lg:text-center">
            Skills
          </h1>
          <div className="flex-wrap flex gap-y-8 gap-x-28">
            <SkillList
              header="Product"
              text={
                <ul>
                  <li>Product Management</li>
                  <li>Requirement Engineering</li>
                  <li>User Experience & Usability</li>
                  <li>Agile Scrum</li>
                  <li>Waterfall</li>
                </ul>
              }
              icon={<FaCube />}
            />
            <SkillList
              header="Frontend"
              text={
                <ul>
                  <li>Javascript, Typescript</li>
                  <li>React, NextJs, Vite</li>
                  <li>HTML, CSS, Tailwind</li>
                  <li>React Native</li>
                  <li>State Management</li>
                </ul>
              }
              icon={<BsCodeSquare />}
            />
            <SkillList
              header="Backend"
              text={
                <ul>
                  <li>Java</li>
                  <li>C</li>
                  <li>Python</li>
                  <li>NodeJs, Express</li>
                  <li>PostgreSQL, MySQL</li>
                  <li>Firebase, Supabase</li>
                  <li>Compilers</li>
                  <li>AWS S3</li>
                </ul>
              }
              icon={<FaCodeBranch />}
            />
            <SkillList
              header="Data Science"
              text={
                <ul>
                  <li>Python</li>
                  <li>R</li>
                  <li>Pytorch</li>
                  <li>Tensorflow</li>
                  <li>LLM</li>
                  <li>Applied ML</li>
                  <li>Haskell</li>
                  <li>Clojure</li>
                </ul>
              }
              icon={<BsClipboardDataFill />}
            />
            <SkillList
              header="Tools & Platforms"
              icon={<FaEdit />}
              text={
                <ul>
                  <li>Docker</li>
                  <li>Git, Github</li>
                  <li>Figma</li>
                  <li>Wordpress</li>
                  <li>OpenAI API</li>
                </ul>
              }
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
