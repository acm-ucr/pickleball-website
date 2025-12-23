interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="text-pickleball-lime-100 py-8 text-center text-6xl font-bold">
      {title}
    </div>
  );
};

export default Header;
