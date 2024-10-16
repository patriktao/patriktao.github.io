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
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-y-10">
        <Fade duration={1000} triggerOnce cascade damping={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left lg:text-center bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
            Skills
          </h1>
          <div className="flex-wrap flex gap-y-8 gap-x-12">
            <SkillList
              header="Project & Product"
              text={
                <ul>
                  <li>Agile Scrum</li>
                  <li>Waterfall</li>
                  <li>Kanban</li>
                  <li>Product Strategy</li>
                  <li>UX Design</li>
                  <li>Requirement Engineering</li>
                </ul>
              }
              icon={<FaCube />}
            />
            <SkillList
              header="Frontend"
              text={
                <ul>
                  <li>Javascript (Typescript)</li>
                  <li>React (NextJs, Vite)</li>
                  <li>HTML/CSS/Tailwind</li>
                  <li>React Native</li>
                  <li>Redux</li>
                </ul>
              }
              icon={<BsCodeSquare />}
            />
            <SkillList
              header="Backend"
              text={
                <ul>
                  <li>Java (JDBC)</li>
                  <li>C Programming</li>
                  <li>Python (Flask)</li>
                  <li>NodeJs (Express)</li>
                  <li>PostgreSQL/MySQL</li>
                  <li>Firebase/Supabase</li>
                </ul>
              }
              icon={<FaCodeBranch />}
            />
            <SkillList
              header="Data Science"
              text={
                <ul>
                  <li>Python</li>
                  <li>R Programming</li>
                  <li>Pytorch</li>
                  <li>Tensorflow</li>
                  <li>LLM</li>
                  <li>Applied ML</li>
                  <li>Excel</li>
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
                  <li>AWS S3</li>
                  <li>Docker</li>
                  <li>Git/Github</li>
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
