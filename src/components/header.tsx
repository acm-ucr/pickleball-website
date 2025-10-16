interface headerProps {
  title: string;
}

const Header = ({ title }: headerProps) => {
  return (
    <h1 className="text-pickleball-lime-100 text-3xl font-bold">{title}</h1>
  );
};

export default Header;
