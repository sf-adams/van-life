import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <img
        src="../assets/about-image.png"
        alt="Person sat on camper van looking up at the night sky"
      />
      <h2>Don&apos;t squeeze in a sedan when you could relax in a van.</h2>
      <p>
        Our mission is to enliven your road trip with the perfe t travel van
        rental. Our vans are recertified befgore each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra)
      </p>
      <p>
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>

      <div>
        <h4>You destination is waiting.</h4>
        <h4>Your van is ready.</h4>
        <Link to="/vans">Explore our vans</Link>
      </div>
    </div>
  );
}
