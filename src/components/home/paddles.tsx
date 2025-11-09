import Paddle from "@/components/home/paddle";
import { paddles } from "@/data/paddle";

const Paddles = () => {
  return (
    <div className="lg:flex-flow mt-16 flex flex-col items-center justify-center lg:flex-wrap">
      <div className="m-5 flex flex-col items-center justify-center lg:flex-row">
        {paddles.slice(0, 3).map(({ text, number }, index) => (
          <Paddle key={index} text={text} number={number} />
        ))}
      </div>
      <div className="lmr-8 m-5 -mt-5 flex flex-col items-center justify-center lg:-mt-60 lg:flex-row">
        {paddles.slice(3).map(({ text, number }, index) => (
          <Paddle key={index + 3} text={text} number={number} rotated={true} />
        ))}
      </div>
    </div>
  );
};

export default Paddles;
