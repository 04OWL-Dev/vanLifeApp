import { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../utils";
import "./hostVans.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export async function loader({ request }) {
  await requiredAuth(request);
  return defer({ vans: getHostVans() });
}
export default function Vans() {
  const { vans } = useLoaderData();
  return (
    <>
      <main className="hostVansMain">
        <header className="hostVansHeader">
          <h1>Your listed vans</h1>
        </header>
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
            {(resolvedVans) => (
              <section className="vansContainer">
                {resolvedVans.map((van) => (
                  <Link to={`${van.id}`} className="vanCard" key={van.id}>
                    <img src={van.imageUrl} alt={`Image for van ${van.name}`} />
                    <div className="vanInfo">
                      <h3>{van.name}</h3>
                      <p>${van.price}/day</p>
                    </div>
                  </Link>
                ))}
              </section>
            )}
          </Await>
        </Suspense>
      </main>
    </>
  );
}
