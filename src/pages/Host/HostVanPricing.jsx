import { useOutletContext } from "react-router-dom";
import "./hostVanPricing.css";
export default function HostVanPricing() {
  const { van } = useOutletContext();
  return (
    <>
      <h3 className="price">${van.price.toFixed(2)}/day</h3>
    </>
  );
}
