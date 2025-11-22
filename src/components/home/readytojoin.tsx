import Button from "@/components/home/button";

const ReadyToJoin = () => {
  return (
    <div className="bg-pickleball-green-200 text-pickleball-lime-100 flex w-full justify-center px-4 py-[12vh] sm:px-8">
      <div className="flex flex-col items-center gap-y-8 text-center sm:gap-y-[5vh]">
        <p className="text-4xl font-bold sm:text-5xl">READY TO JOIN?</p>
        <p className="max-w-xs text-center text-base sm:max-w-2xl sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          textColor="text-white"
          background="bg-blue-500"
          borderColor="border-black"
          text="Highlander Link Application"
          link="https://highlanderlink.ucr.edu/organization/pickleball"
        />
        <Button
          textColor="text-blue-500"
          background="bg-white"
          borderColor="border-blue-500"
          text="Recreational Pickleball Club Application"
          link="/"
        />
      </div>
    </div>
  );
};

export default ReadyToJoin;
