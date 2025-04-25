import { useOutletContext } from "react-router-dom";
import "./hostVanPhotos.css";
export default function HostVanPhotos() {
  const { van } = useOutletContext();
  return (
    <>
      <img
        src={van.imageUrl}
        alt={`Image for van ${van.name}`}
        className="vanImg"
      />
    </>
  );
}
