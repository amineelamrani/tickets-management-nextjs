import React, { JSX } from "react";
import Link from "next/link";

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
    <Link
      href={`/${direction}`}
      className="hover:cursor-pointer w-1/3 border-white border-2 pb-24 hover:bg-foreground hover:text-background "
    >
      <h1 className="text-2xl font-bold p-2">{text}</h1>
    </Link>
  );
};

export default RectangleSelection;
