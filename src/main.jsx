import "./components/Vans/layout.css";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./server.js";
import Layout from "./components/Vans/Layout.jsx";
import Home from "./pages/Vans/Home.jsx";
import About from "./pages/Vans/About.jsx";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.jsx";
import VanDetails, {
  loader as vanDetailsLoader,
} from "./pages/Vans/VanDetails.jsx";
import HostLayout from "./components/Host/HostLayout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans.jsx";
import HostVanDetailsLayout, {
  loader as hostVansDetailsLayoutLoader,
} from "./components/Host/HostVanDetailsLayout.jsx";
import HostVanDetails from "./pages/Host/HostVanDetails.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import NotFound from "./pages/General/NotFound.jsx";
import Error from "./components/General/Error.jsx";
import Login from "./pages/General/Login.jsx";
import {
  loader as loginLoader,
  action as loginAction,
} from "./pages/General/Login.jsx";
import { requiredAuth } from "./utils.js";
import { loader as hostDashboardLoader } from "./pages/Host/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailsLoader}
        errorElement={<Error />}
      />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={hostDashboardLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requiredAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requiredAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetailsLayout />}
          loader={hostVansDetailsLayoutLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanDetails />}
            loader={async ({ request }) => await requiredAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requiredAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requiredAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
