import Paddle from "@/components/home/paddle";
import { paddles } from "@/data/paddle";

const Paddles = () => {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center">
      <div className="m-5 flex items-center justify-center">
        {paddles.slice(0, 3).map(({ text, number }, index) => (
          <Paddle key={index} text={text} number={number} />
        ))}
      </div>
      <div className="m-5 -mt-60 mr-8 flex items-center justify-center">
        {paddles.slice(3).map(({ text, number }, index) => (
          <Paddle key={index + 3} text={text} number={number} rotated={true} />
        ))}
      </div>
    </div>
  );
};

export default Paddles;
