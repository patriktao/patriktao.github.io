import React from "react";

interface Props {
  date?: string;
  header?: React.ReactNode;
  subheader?: React.ReactNode;
  icons?: React.ReactNode;
  image?: React.ReactNode;
  headerIcon?: React.ReactNode;
  direction?: "left" | "right";
}

const Content = ({ date, header, headerIcon, subheader, icons }: Props) => (
  <div className="grid-span-1">
    <p className="mb-1 text-zinc-500">{date}</p>
    <div className="flex items-center mb-4 gap-x-2">
      <h2 className="text-3xl font-bold text-black">{header}</h2>
      {headerIcon}
    </div>
    <p className="text-lg font-normal mb-10 text-zinc-800">{subheader}</p>
    {icons}
  </div>
);

const PortfolioItem = ({
  date = "",
  header = null,
  subheader = "",
  icons = null,
  image = null,
  headerIcon = null,
  direction = "left",
}: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-x-24 items-center">
      {direction === "left" ? (
        <>
          {image}
          <Content {...{ date, header, headerIcon, subheader, icons }} />
        </>
      ) : (
        <>
          <Content {...{ date, header, headerIcon, subheader, icons }} />
          {image}
        </>
      )}
    </div>
  );
};

export default PortfolioItem;
