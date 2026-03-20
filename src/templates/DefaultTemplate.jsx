import { NavLink, Outlet } from "react-router";
import { useLoaderContext } from "../contexts/Loadercontext";
import { useAlertContext } from "../contexts/AlertContext";

export default function DefaultTemplate() {
  const { isLoading } = useLoaderContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Best Films
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
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
        {isLoading && (
          <div className="loader-overlay d-flex justify-content-center align-items-center">
            <div
              className="spinner-border text-light"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div className="container py-5">
          {alert.visible && (
            <div className={`alert alert-${alert.type}`}>{alert.message}</div>
          )}
          ;
          <Outlet />
        </div>
      </main>
    </>
  );
}
