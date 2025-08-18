"use client";
import React, { JSX } from "react";

type RectangleProps = {
  text: string;
  direction: string;
};

const RectangleSelection = ({
  text,
  direction,
}: RectangleProps): JSX.Element => {
  const handleClick = () => {
    console.log(`Button ${text} - is clicked to the direction : ${direction}`);
  };

  return (
    <div
      onClick={handleClick}
      className="hover:cursor-pointer w-1/3 border-white border-2 pb-24 hover:bg-foreground hover:text-background "
    >
      <h1 className="text-2xl font-bold p-2">{text}</h1>
    </div>
  );
};

export default RectangleSelection;
