import { Outlet } from "react-router-dom";

import Header from "../components/Header";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 #VANLIFE</p>
      </footer>
    </>
  );
}
