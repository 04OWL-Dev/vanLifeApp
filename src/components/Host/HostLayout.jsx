import { Outlet, NavLink } from "react-router-dom";
import "./hostLayout.css";
export default function HostLayout() {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="hostNav">
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
