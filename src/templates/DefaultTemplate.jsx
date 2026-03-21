import { NavLink, Outlet } from "react-router";
import { useLoaderContext } from "../contexts/LoaderContext";
import { useAlertContext } from "../contexts/AlertContext";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

export default function DefaultTemplate() {
  const { isLoading } = useLoaderContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold text-primary" to="/">
            Best Films
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link">
                  Movies catalog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <div className="container py-5">
          <Outlet />
        </div>
      </main>
    </>
  );
}
