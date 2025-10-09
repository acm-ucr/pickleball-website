import React from "react";

const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    // Outer rectangle
    <h1 className="bg-pickleball-green-200 flex w-2/3 flex-col items-center justify-center gap-6 rounded-2xl p-10">
      {/* Top rectangle */}
      <h2 className="bg-pickleball-green-100 px-30 py-4 text-center text-xl text-white">
        {props.text1}
      </h2>

      {/* Inner Pill Shaped */}
      <h2 className="flex gap-1">
        <h3 className="bg-pickleball-lime-100 w-full rounded-4xl p-5 px-12 text-right">
          {props.text2}
        </h3>
        <h3 className="bg-pickleball-lime-100 w-full rounded-4xl p-5 px-12 text-left">
          {props.text3}
        </h3>
      </h2>

      <h2 className="bg-pickleball-blue-100 px-30 py-4 text-center text-xl text-black">
        {props.text4}
      </h2>
    </h1>
  );
};

export default Example;
