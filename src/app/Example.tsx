import React from "react";

interface ComponentProps {
  text1: string;
  text2: string;
  text3: string;
}

const ComponentProps = ({ text1, text2, text3 }: ComponentProps) => {
  return (
    <div className="bg-pickleball-green-200 flex w-2/3 flex-col items-center justify-center gap-8 rounded-2xl p-10 justify-self-center">
      <div className="bg-pickleball-green-100 w-1/2 py-4 text-center text-xl text-white">
        {text1}
      </div>

      <div className="flex w-1/2 gap-1" >
        <div className="bg-pickleball-lime-100 flex-1 flex items-center justify-center rounded-full py-4 text-lg text-black">
          {text2}
        </div>
        <div className="bg-pickleball-lime-100 flex-1 flex items-center justify-center rounded-full py-4 text-lg text-black">
          {text2}
        </div>
      </div>

      <div className="bg-pickleball-blue-100 w-1/2 py-4 text-center text-xl text-black">
        {text3}
      </div>
    </div>
  );
};

export default ComponentProps;
