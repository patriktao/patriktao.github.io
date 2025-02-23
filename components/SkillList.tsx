import React from "react";
import { BsCodeSlash } from "react-icons/bs";

interface Props {
  header: String;
  icon?: JSX.Element;
  text?: JSX.Element;
}

const SkillList = (props: Props) => {
  return (
    <div className="min-w-full md:min-w-0 bg-transparent flex flex-col items-center">
      <div className="text-3xl mb-4 text-gray-500">
        {props.icon}
      </div>
      <h5 className="mb-2 text-2xl font-semibold text-gray-900">
        {props.header}
      </h5>
      <div className="mb-3 text-md text-gray-800">
        {props.text}
      </div>
    </div>
  );
};

export default SkillList;
