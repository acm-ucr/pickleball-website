import Link from "next/link";

interface ButtonProps {
  textColor: string;
  background: string;
  borderColor: string;
  text: string;
  link: string;
}

const Button = ({
  textColor,
  background,
  borderColor,
  text,
  link,
}: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`${textColor} ${background} ${borderColor} w-full rounded-xl border-2 py-3 text-center text-xl hover:scale-105 sm:text-3xl`}
    >
      {text}
    </Link>
  );
};

export default Button;
