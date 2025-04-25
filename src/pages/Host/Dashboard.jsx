import "./dashboard.css";
import { IoIosStar } from "react-icons/io";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Suspense } from "react";
import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { requiredAuth } from "../../utils";
import { getHostVans } from "../../api";

export async function loader({ request }) {
  await requiredAuth(request);
  return defer({ vans: getHostVans() });
}

export default function Dashboard() {
  const { vans } = useLoaderData();
  function renderVans(vans) {
    const hostVansEls = vans.map((van) => (
      <article className="dashboard-vanCard" key={van.id}>
        <div className="dashboard-vanContainer">
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <section className="dashboard-vanInfo">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </section>
        </div>
        <Link to={`/host/vans/${van.id}`}>View</Link>
      </article>
    ));

    return <>{hostVansEls}</>;
  }

  return (
    <>
      <main className="hostDashboardMain">
        <section className="welcomeArea">
          <h1>Welcome!</h1>
          <span className="incomeInfo">
            <p>
              Income last <span>30 days</span>
            </p>
            <Link to="/host/income">Details</Link>
          </span>
          <h2>$2,260</h2>
        </section>
        <section className="reviewArea">
          <span className="scoreArea">
            <h2>Review Score</h2>
            <IoIosStar className="star" />
            <p className="rate">
              <span>5.0</span>/5
            </p>
          </span>
          <Link to="/host/reviews">Details</Link>
        </section>
        <section className="vans">
          <h2>Your listed vans</h2>
          <Suspense
            fallback={
              <Box sx={{ width: "100%" }}>
                <LinearProgress
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#ff9800", // naranja
                    },
                    backgroundColor: "#ffe0b2", // fondo claro
                  }}
                />
              </Box>
            }
          >
            <Await resolve={vans}>
              {(resolvedVans) => renderVans(resolvedVans)}
            </Await>
          </Suspense>
        </section>
      </main>
    </>
  );
}
