import { useOutletContext } from "react-router-dom";
import "./hostVanDetails.css";
export default function HostVanDetails() {
  const { van } = useOutletContext();

  return (
    <>
      {van ? (
        <main className="hostVanDetailsMain">
          <section className="vanDetailsCard">
            <p>
              <span className="label">Name:</span>
              <span className="text">{van.name}</span>
            </p>
            <p>
              <span className="label">Category:</span>
              <span className="text">
                {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
              </span>
            </p>
            <p>
              <span className="label">Description:</span>
              <span className="text">{van.description}</span>
            </p>
          </section>
        </main>
      ) : (
        <h3 className="vanDetailsCard">Loading...</h3>
      )}
    </>
  );
}
