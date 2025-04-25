import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.css";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
