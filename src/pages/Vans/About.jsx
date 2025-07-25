import { Link } from "react-router-dom";
import aboutImg from "../../assets/image55.png";
import "./about.css";
export default function About() {
  return (
    <>
      <img src={aboutImg} alt="VanLife concept image" />
      <main>
        <section className="aboutSection">
          <h1>Dont squeeze in a sedan when you could relax in a van</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are certified before each trip to ensure your
            travel plans can go off without a hitch (Hitch costs extra).
          </p>
          <p>
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels
          </p>
          <aside>
            <h2>
              Your destination is waiting. <br /> Your van is ready.
            </h2>
            <Link to="/vans">Explore our vans.</Link>
          </aside>
        </section>
      </main>
    </>
  );
}
