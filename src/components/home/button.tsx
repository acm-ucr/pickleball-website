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
      className="w-1/5 rounded-md border-2 py-2 text-center"
      style={{
        color: textColor,
        backgroundColor: background,
        borderColor: borderColor,
      }}
    >
      {text}
    </Link>
  );
};

export default Button;
