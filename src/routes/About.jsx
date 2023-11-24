import { Link } from "react-router-dom";
import AboutHero from "../assets/about-image.png";

export default function About() {
  return (
    <main className="about">
      <img
        className="about__hero"
        src={AboutHero}
        alt="Person sat on camper van looking up at the night sky"
      />
      <section className="about__container">
        <h2 className="about__title">
          Don&apos;t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="about__description">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your travel
          plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="about__description">
          Our team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="about__callout">
          <h4 className="about__callout-text">Your destination is waiting.</h4>
          <h4 className="about__callout-text">Your van is ready.</h4>
          <Link to="/vans" className="button about__link">
            Explore our vans
          </Link>
        </div>
      </section>
    </main>
  );
}
