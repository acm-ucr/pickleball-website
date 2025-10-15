import Image from "next/image";
import logo from "@/public/images/logo_transparent_2.webp";

const Landing = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-1/2 flex-col items-center justify-center gap-y-12">
        <Image src={logo} alt="Logo" className="h-1/4 w-1/4" />
        <p className="text-pickleball-lime-100 text-5xl font-bold">
          Like to Pickle?
        </p>
        <p className="text-pickleball-lime-100 text-7xl font-bold">
          PICKLEBALL@UCR
        </p>
        <p className="text-pickleball-lime-100 max-w-xl text-center text-lg">
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
