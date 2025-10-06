const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-pickleball-green-200 flex w-3/4 items-center gap-1 justify-self-center p-8">
      <div className="bg-pickleball-lime-100 w-1/2 p-5 text-left">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-pickleball-lime-100 w-full p-5 text-left">
          props.text2
        </div>
        <div className="bg-pickleball-lime-100 w-full p-5 text-right">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
    </div>
  );
};

export default Example;
