import { Suspense } from "react";
import {
  NavLink,
  Outlet,
  Link,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { getVanDetails } from "../../api";
import { requiredAuth } from "../../utils";
import "./hostVanDetailsLayout.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export async function loader({ params, request }) {
  const { id } = params;
  await requiredAuth(request);
  return defer({ van: getVanDetails(id) });
}

export default function HostVanDetailsLayout() {
  const { van } = useLoaderData();
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      {
        <>
          <main className="detailsLayoutMain">
            <header className="hostVanDetailsHeader">
              <FaLongArrowAltLeft />
              <Link to={".."} relative="path">
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
                  <section className="layoutVanDetails">
                    <img src={van.imageUrl} alt={`Image for van ${van.name}`} />
                    <span
                      className={`host-van-detail-type host-van-detail-type-${van.type}`}
                    >
                      {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                    </span>
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>
                    <nav className="hostVanDetailNav">
                      <NavLink
                        to="."
                        end
                        style={({ isActive }) => (isActive ? activeLink : null)}
                      >
                        Details
                      </NavLink>
                      <NavLink
                        to="pricing"
                        style={({ isActive }) => (isActive ? activeLink : null)}
                      >
                        Pricing
                      </NavLink>
                      <NavLink
                        to="photos"
                        style={({ isActive }) => (isActive ? activeLink : null)}
                      >
                        Photos
                      </NavLink>
                    </nav>
                    <Outlet context={{ van }} />
                  </section>
                )}
              </Await>
            </Suspense>
          </main>
        </>
      }
    </>
  );
}
