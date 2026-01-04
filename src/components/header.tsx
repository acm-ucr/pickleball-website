interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="text-pickleball-lime-100 py-8 text-center text-6xl font-bold">
      {children}
    </div>
  );
};

export default Header;
