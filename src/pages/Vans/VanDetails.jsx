import { Suspense } from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { getVanDetails } from "../../api";
import "./vanDetails.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export function loader({ params }) {
  const { id } = params;
  return defer({ van: getVanDetails(id) });
}
export default function VanDetails() {
  const { van } = useLoaderData();
  const location = useLocation();
  return (
    <>
      {
        <main className="vanDetailsMain">
          <header className="vanDetailsHeader">
            <FaLongArrowAltLeft />
            <Link
              to={location?.state ? "../?" + location.state.search : ".."}
              relative="path"
            >
              Back to all vans
            </Link>
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
            <Await resolve={van}>
              {(van) => (
                <section className="vanDetails">
                  <img src={van.imageUrl} alt={`Image for van ${van.name}`} />
                  <p className={`vanType vanType-${van.type}`}>
                    {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                  </p>
                  <h2>{van.name}</h2>
                  <p className="vanPrice">
                    <span>${van.price}</span>/day
                  </p>
                  <p>{van.description}</p>
                  <button type="button" className="rentBtn">
                    Rent this van
                  </button>
                </section>
              )}
            </Await>
          </Suspense>
        </main>
      }
    </>
  );
}
