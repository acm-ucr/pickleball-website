import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo_transparent_2.webp";
import footerData from "@/data/footer";

const Footer = () => {
  return (
    <div className="bg-pickleball-lime-100 relative flex w-full items-center justify-between">
      <Image
        src={Logo}
        alt="Pickleball @ UCR"
        className="ml-[6vw] w-1/8 py-[6vh]"
      />
      <div className="text-pickleball-green-100 mr-[6vw]">
        <div className="flex flex-col gap-y-[2vh]">
          <p className="text-4xl">Contact Us</p>
          <p className="text-xl">pickleballclubatucr@gmail.com</p>
          <div className="flex gap-x-[7%]">
            {footerData.map(({ Icon, link }) => (
              <div key={link}>
                <Link href={link} target="_blank">
                  <Icon className="h-[6vh] w-auto" />
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
