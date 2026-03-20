import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ movieId, onReviewSuccess }) {
  // stato iniziale del form
  const formInitialData = {
    name: "",
    vote: 5,
    text: "",
  };

  const [formData, setFormData] = useState(formInitialData);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const storeMovieReview = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_BACKEND_URL}/${movieId}/review`,
        formData,
      )
      .then((res) => {
        // se va bene, resetta e avvisa il componente padre (la pagina)
        setFormData(formInitialData);

        //note  Quando  la recensione viene inviata, il database viene aggiornato, ma la Pagina non lo sa ancora.
        //note   "Se mio padre mi ha dato un numero di telefono  (onReviewSuccess), io lo chiamo per dirgli che ho finito".
        //note    Chiamando quella funzione, la Pagina farà un nuovo fetchMovies e la tua recensione apparirà subito a schermo senza ricaricare il sito.

        if (onReviewSuccess) onReviewSuccess();
        alert("Review sent successfully!");
      })
      .catch((err) => {
        setErrorMessage(err.response?.data?.message || "Error sending review"); // cerca di leggere il messaggio nell'utility validateReview. ? --> OPTIONAL CHAINING servono a non far crashare l'app se il server è spento e quella risposta non esiste.|| oppure --> frase di riserva generica.
      });
  };

  // Gestione del Submit
  // Questa funzione blocca il refresh e chiama la funzione di invio
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    storeMovieReview();
  };

  return (
    <div className="card p-4 shadow-sm mt-5 bg-light">
      <h4 className="mb-4 text-primary">Add a new review</h4>

      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <form onSubmit={handleFormSubmit}>
        {/* User Name */}
        <div className="mb-3">
          <label className="form-label fw-bold">User Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>
        {/* Rating */}
        <div className="mb-3">
          <label className="form-label fw-bold">Rating (1-5)</label>
          <input
            name="vote"
            type="number"
            className="form-control"
            value={formData.vote}
            onChange={handleFormChange}
            required
          />
          <div className="form-text">Inserisci un valore intero da 1 a 5.</div>
        </div>

        {/* Review Text */}
        <div className="mb-3">
          <label className="form-label fw-bold">Your Review</label>
          <textarea
            name="text"
            className="form-control"
            rows="4"
            placeholder="Write your opinion here..."
            value={formData.text}
            onChange={handleFormChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary px-5 shadow-sm">
          Submit Review
        </button>
      </form>
    </div>
  );
}
