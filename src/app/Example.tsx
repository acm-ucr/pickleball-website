const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-pickleball-green-200 flex w-2/3 flex-col items-center gap-9 justify-self-center rounded-2xl p-8">
      <div className="bg-pickleball-green-100 w-1/2 p-5 text-center text-2xl text-white">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-pickleball-lime-100 w-full rounded-full p-5 text-center text-2xl">
          {props.text2}
        </div>
        <div className="bg-pickleball-lime-100 w-full rounded-full p-5 text-center text-2xl">
          {props.text2}
        </div>
      </div>
      <div className="bg-pickleball-blue-100 w-1/2 p-5 text-center text-2xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
