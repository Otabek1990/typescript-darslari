import { NavLink } from "react-router-dom";

interface HeaderProps {
  ism: string;
  yosh:number;
  id:number
}

function Header({ ism,yosh }: HeaderProps) {
  return (
    <header className="bg-blue-500 py-5 px-16">
      <h1>{ism}-{yosh}</h1>
      <NavLink to={"/"}>Asosiy</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </header>
  );
}

export default Header;
