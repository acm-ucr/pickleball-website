import React from "react";

interface ComponentProps {
  text1: string;
  text2: string;
  text3: string;
}

const ComponentProps = ({ text1, text2, text3 }: ComponentProps) => {
  return (
    <div className="bg-pickleball-green-200 flex w-2/3 flex-col items-center justify-center gap-6 rounded-2xl p-10">
      <div className="bg-pickleball-green-100 rounded-md px-30 py-4 text-center text-xl text-white">
        {text1}
      </div>

      <div className="flex gap-1">
        <div className="bg-pickleball-lime-100 w-full rounded-4xl p-5 px-12 text-right">
          {text2}
        </div>
        <div className="bg-pickleball-lime-100 w-full rounded-4xl p-5 px-12 text-left">
          {text2}
        </div>
      </div>

      <div className="bg-pickleball-blue-100 px-30 py-4 text-center text-xl text-black">
        {text3}
      </div>
    </div>
  );
};

export default ComponentProps;
