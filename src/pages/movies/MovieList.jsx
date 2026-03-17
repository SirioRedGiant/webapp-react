import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieList() {
  //  lo stato per i film
  const [movies, setMovies] = useState([]);

  // chiamata all'API di Express
  function fetchMovies() {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((res) => {
        console.log(res.data);
        // Salviamo i dati che arrivano dal backend nello stato
        setMovies(res.data.);
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei film", err);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <section className="container py-5">
      <h1 className="mb-4">Catalogo Film</h1>
      <div className="row g-4">
        {/* Cicliamo i film ricevuti dal database */}
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{movie.title}</h5>
                <p className="card-text text-muted flex-grow-1">
                  {movie.abstract}
                </p>
                {/* Usiamo un link dinamico per il dettaglio */}
                <a
                  href={`/movies/${movie.id}`}
                  className="btn btn-primary mt-auto"
                >
                  Vedi Recensioni
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
