import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import MovieDetail from "../../components/MovieDetail";
import ReviewForm from "../../components/ReviewForm";
import { useLoaderContext } from "../../contexts/LoaderContext";
import { useAlertContext } from "../../contexts/AlertContext";

export default function MovieDetailPage() {
  //  Stato per l'intero oggetto film
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); // 2. Recupera l'ID dall'URL
  const { activateLoading, deactivateLoading } = useLoaderContext();
  const { showAlert } = useAlertContext();

  // chiamata all'API di Express
  function fetchMovies() {
    activateLoading();

    axios
      .get(`${import.meta.env.VITE_API_BACKEND_URL}/movies/${id}`)
      .then((res) => {
        console.log(res.data);
        // i dati che arrivano dal backend nello stato
        setMovie(res.data);
      })
      .catch((err) => {
        console.error("Errore nel caricamento del film", err);
        showAlert("Film non trovato o errore del server", "danger");
      })
      .finally(() => {
        deactivateLoading();
      });
  }

  useEffect(() => {
    fetchMovies();
  }, [id]);

  if (!movie) return <p>Loading...</p>;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/movies" className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-arrow-left me-2"></i>Back to Movies List
        </Link>
      </div>
      <h1>MovieDetail: {movie.title}</h1>
      <MovieDetail movie={movie} reviews={movie.reviews} />
      <ReviewForm movieId={id} onReviewSuccess={fetchMovies} />
    </>
  );
}
