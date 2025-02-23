import React from "react";

type Props = {
  date?: String;
  subtitle?: String;
  title?: String;
  text?: String;
};

const Timepoint = ({ date, title, text, subtitle }: Props) => {
  return (
    <li>
      <div className="flex-start flex items-center pt-2 md:block md:pt-0">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 md:-mt-[5px] md:ml-0 md:mr-0"></div>
        <p className="mt-2 text-sm text-neutral-500 ">
          {date}
        </p>
      </div>
      <div className="ml-4 mt-2 pb-5 md:ml-0">
        <h4 className="mb-2 text-xl font-semibold text-gray-800">{title}</h4>
        <p className="block mb-2 text-lg font-medium leading-none text-gray-500">
          {subtitle}
        </p>
        <p className="mb-3 font-regular text-gray-600">{text}</p>
      </div>
    </li>
  );
};

export default Timepoint;
