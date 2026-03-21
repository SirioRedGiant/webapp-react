import { useLoaderContext } from "../contexts/Loadercontext";

export default function Loader() {
  const { isLoading } = useLoaderContext();

  // Se isLoading è false, non disegnare nulla
  if (!isLoading) return null;

  return (
    <div className="loader-overlay d-flex justify-content-center align-items-center">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
