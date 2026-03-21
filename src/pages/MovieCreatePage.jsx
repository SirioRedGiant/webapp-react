import axios from "axios";
import { useNavigate } from "react-router";
import { useLoaderContext } from "../contexts/LoaderContext";
import { useAlertContext } from "../contexts/AlertContext";

export default function MovieCreatePage() {
  const navigate = useNavigate();

  const { activateLoading, deactivateLoading } = useLoaderContext();
  const { showAlert } = useAlertContext();

  const storeNewMovie = (e) => {
    e.preventDefault();
    //
    activateLoading();

    //note  Utilizzo di FormData per impacchettare i testi e il FILE --> Axios deve inviare un oggetto FormData invece di un oggetto semplice {} per permettere a Multer di ricevere il file.
    // e.target è il form stesso: FormData legge tutti gli input con un attributo 'name'
    const dataToSend = new FormData(e.target);

    axios
      .post(`${import.meta.env.VITE_API_BACKEND_URL}/movies/create`, dataToSend)
      .then((res) => {
        const newId = res.data.id; // prendo l'ID dal corpo della risposta --> res.data

        showAlert("Movie created successfully!", "success");

        // Navigo verso la rotta di dettaglio usando l'ID appena ricevuto con ternario --> navigate(newId ? `/movies/${newId}` : "/movies");
        if (newId) {
          navigate(`/movies/${newId}`);
        } else {
          // nel caso l'ID non arrivi
          navigate("/movies");
        }
        // SCROLL IN CIMA
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((err) => {
        console.error("Error adding the movie", err);
        alert("Si è verificato un errore durante il salvataggio.");
        showAlert("Error during saving", "danger");
      })
      .finally(() => {
        deactivateLoading();
      });
  };

  //!IMPORTANTE --> Non serve più gestire lo stato formData campo per campo con handleFormChange perché FormData(e.target) legge i valori direttamente dagli input al submit.
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Add a New Movie</h1>
      <form onSubmit={storeNewMovie} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" className="form-control" required />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Director</label>
            <input name="director" className="form-control" required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Release Year</label>
            <input
              name="release_year"
              type="number"
              className="form-control"
              defaultValue="2024"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input name="genre" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Movie Poster (Image File)</label>
          {/* CAMBIATO IN TYPE="FILE" e name="image" per Multer */}
          <input
            name="image"
            type="file"
            className="form-control"
            accept="image/*"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Abstract</label>
          <textarea
            name="abstract"
            className="form-control"
            rows="3"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary px-5 shadow-sm">
          Add/Save Movie
        </button>
      </form>
    </div>
  );
}
