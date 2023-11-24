import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img src={Logo} alt="Van Life Logo" />
      </Link>

      <nav className="header__nav">
        <Link to="/about" className="header__nav-item">About</Link>
        <Link to="/vans" className="header__nav-item">Vans</Link>
      </nav>
    </header>
  );
}
