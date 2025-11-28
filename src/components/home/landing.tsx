import Image from "next/image";
import logo from "@/public/images/logo_transparent_2.webp";

const Landing = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center py-12">
      <div className="flex w-full flex-col items-center justify-center gap-y-6 px-4 sm:gap-y-8 md:w-3/4 lg:w-1/2">
        <Image
          src={logo}
          alt="Logo"
          className="h-auto w-1/2 sm:w-1/3 md:w-1/4"
        />
        <p className="text-pickleball-lime-100 text-3xl font-bold sm:text-4xl md:text-5xl">
          Like to Pickle?
        </p>
        <p className="text-pickleball-lime-100 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          PICKLEBALL@UCR
        </p>
        <p className="text-pickleball-lime-100 max-w-xl text-center text-base sm:text-lg">
          Welcome to the Pickleball Club at the University of California,
          Riverside! We offer recreational pickleball for students, staff, and
          faculty. Join us to improve your pickleball skills, enjoy social
          events, and make new connections. Open to all skill levels!
        </p>
      </div>
    </div>
  );
};

export default Landing;
