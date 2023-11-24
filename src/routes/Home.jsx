import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <h1 className="home__title">You got the travel plans, we got the travel vans.</h1>
      <p className="home__description">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/vans" className="home__link">Find your van</Link>
    </main>
  );
}
