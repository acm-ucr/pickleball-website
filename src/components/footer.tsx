import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo_transparent_2.webp";
import footerData from "@/data/footer";

const Footer = () => {
  return (
    <div className="bg-pickleball-lime-100 relative flex w-full flex-col items-center justify-between md:flex-row">
      <Image
        src={Logo}
        alt="Pickleball @ UCR"
        className="ml-[6vw] w-1/4 py-[3vh] md:w-1/5 md:py-[6vh] lg:w-1/8"
      />
      <div className="text-pickleball-green-100 pb-[3vh] md:mr-[6vw] md:pb-0">
        <div className="flex flex-col items-center gap-y-[1vh] md:items-start md:gap-y-[2vh]">
          <p className="text-2xl md:text-4xl">Contact Us</p>
          <p className="text-lg md:text-xl">pickleballclubatucr@gmail.com</p>
          <div className="flex justify-center gap-x-[15%] md:justify-normal md:gap-x-[7%]">
            {footerData.map(({ Icon, link }) => (
              <div key={link}>
                <Link href={link} target="_blank">
                  <Icon className="size-[2.75em] w-auto" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
