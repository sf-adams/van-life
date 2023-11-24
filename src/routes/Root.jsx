import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Root() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} alt="Van Life Logo" />
        </Link>

        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 #VANLIFE</p>
      </footer>
    </>
  );
}
