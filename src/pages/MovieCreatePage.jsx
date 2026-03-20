import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function MovieCreatePage() {
  const navigate = useNavigate();
  const initialData = {
    title: "",
    director: "",
    genre: "",
    release_year: 2024,
    abstract: "",
    image: "", // Qui per ora mettiamo un URL stringa
  };

  const [formData, setFormData] = useState(initialData);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const storeNewMovie = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_BACKEND_URL}/movies/create`, formData)
      .then(() => {
        // prendo l'ID dal corpo della risposta --> res.data
        const newId = res.data.id;

        // Navigo verso la rotta di dettaglio usando l'ID appena ricevuto
        if (newId) {
          navigate(`/movies/${newId}`);
        } else {
          // nel caso l'ID non arrivi
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.error("Error adding the movie", err);
        alert("Si è verificato un errore durante il salvataggio.");
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Add a New Movie</h1>
      <form onSubmit={storeNewMovie} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            name="title"
            className="form-control"
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Director</label>
            <input
              name="director"
              className="form-control"
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Release Year</label>
            <input
              name="release_year"
              type="number"
              className="form-control"
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input
            name="genre"
            className="form-control"
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            name="image"
            className="form-control"
            placeholder="http://..."
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Abstract</label>
          <textarea
            name="abstract"
            className="form-control"
            rows="3"
            onChange={handleFormChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add/Save Movie
        </button>
      </form>
    </div>
  );
}
