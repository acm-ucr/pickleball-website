import Button from "@/components/home/button";

const ReadyToJoin = () => {
  return (
    <div className="bg-pickleball-green-200 text-pickleball-lime-100 flex w-full justify-center py-[12vh]">
      <div className="flex flex-col items-center gap-y-[5vh]">
        <p className="text-5xl font-bold">READY TO JOIN?</p>
        <p className="text-center text-lg">
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
