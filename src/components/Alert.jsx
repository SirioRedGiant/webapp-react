import { useAlertContext } from "../contexts/AlertContext";

export default function Alert() {
  const { Alert: alertData, hideAlert } = useAlertContext(); // Estrazione Alert e renominazione

  if (!alertData.visible) return null;

  return (
    <div className="container mt-3">
      <div
        className={`alert alert-${alertData.type} alert-dismissible fade show`}
      >
        {alertData.message}
        <button
          type="button"
          className="btn-close"
          onClick={hideAlert}
        ></button>
      </div>
    </div>
  );
}
