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
      className="rounded-md border-1 px-12 py-2"
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
