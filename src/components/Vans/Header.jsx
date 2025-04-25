import { Link, NavLink } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          #VANLIFE
        </Link>
        <nav className="navbar">
          <NavLink
            className={({ isActive }) => (isActive ? "activeMainLink" : null)}
            to="/host"
            aria-label="Host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "activeMainLink" : null)}
            to="/about"
            aria-label="About"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "activeMainLink" : null)}
            to="/vans"
            aria-label="Vans"
          >
            Vans
          </NavLink>
          <NavLink to="login">
            <CiUser className="user" />
          </NavLink>
          <NavLink to="login" onClick={() => localStorage.clear()}>
            <IoExitOutline className="user" />
          </NavLink>
        </nav>
      </header>
    </>
  );
}
