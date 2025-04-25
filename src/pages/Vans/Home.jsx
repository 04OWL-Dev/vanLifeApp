import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main className="mainSection">
        <section>
          <h1>You got the travel plans, we got the travel vans.</h1>
          <aside className="mainDescription">
            <p>
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <Link to="/vans">Find your van</Link>
          </aside>
        </section>
      </main>
    </>
  );
}

export default Home;
