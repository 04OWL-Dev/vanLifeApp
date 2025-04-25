import { Suspense } from "react";
import "./vans.css";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export async function loader() {
  return defer({ vans: getVans() });
}

export default function Vans() {
  const { vans } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const handleFilter = (key, value) => {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <>
      <main className="vansMain">
        <header className="vansMainHeader">
          <h1>Explore our van options</h1>
          <section className="vansFilters">
            <button
              type="button"
              className={`simpleBtn ${
                typeFilter === "simple" ? "selected" : ""
              }`}
              aria-label="Simple filter"
              onClick={() => handleFilter("type", "simple")}
            >
              Simple
            </button>
            <button
              type="button"
              className={`luxuryBtn ${
                typeFilter === "luxury" ? "selected" : ""
              }`}
              aria-label="Luxury filter"
              onClick={() => handleFilter("type", "luxury")}
            >
              Luxury
            </button>
            <button
              type="button"
              className={`ruggedBtn ${
                typeFilter === "rugged" ? "selected" : ""
              }`}
              aria-label="Rugged filter"
              onClick={() => handleFilter("type", "rugged")}
            >
              Rugged
            </button>
            {typeFilter && (
              <button
                type="button"
                className="clearBtn"
                aria-label="Clear filters"
                onClick={() => handleFilter("type", null)}
              >
                Clear filters
              </button>
            )}
          </section>
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
              <section className="vansCards">
                {resolvedVans
                  .filter(
                    (van) => van.type === typeFilter || typeFilter === null
                  )
                  .map((van) => {
                    return (
                      <Link
                        key={van.id}
                        to={`${van.id}`}
                        className="vanLink"
                        state={{ search: searchParams.toString() }}
                      >
                        <article key={van.id} className="van">
                          <img
                            src={van.imageUrl}
                            alt={`Imagen de la van ${van.name}`}
                            className="vanImg"
                          />
                          <section className="vanInfo">
                            <h3>{van.name}</h3>
                            <p className="vanPrice">${van.price}/day</p>
                          </section>
                          <span className={`vanType vanType-${van.type}`}>
                            {van.type.charAt(0).toUpperCase() +
                              van.type.slice(1)}
                          </span>
                        </article>
                      </Link>
                    );
                  })}
              </section>
            )}
          </Await>
        </Suspense>
      </main>
    </>
  );
}
