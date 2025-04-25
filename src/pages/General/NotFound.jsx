import { Link } from "react-router-dom";
import "./notFound.css";
export default function NotFound() {
  return (
    <>
      <main className="notFoundMain">
        <h1>Sorry, the page you were looking for does not exist</h1>
        <Link to=".." relative="path">
          Return to home
        </Link>
      </main>
    </>
  );
}
