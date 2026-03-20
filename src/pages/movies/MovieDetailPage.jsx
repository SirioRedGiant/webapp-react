import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import MovieDetail from "../../components/MovieDetail";
import ReviewForm from "../../components/ReviewForm";
import { useLoaderContext } from "../../contexts/Loadercontext";

export default function MovieDetailPage() {
  //  Stato per l'intero oggetto film
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); // 2. Recupera l'ID dall'URL
  const { activateLoading, deactivateLoading } = useLoaderContext();

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
      <h1>MovieDetail: {movie.title}</h1>
      <MovieDetail movie={movie} reviews={movie.reviews} />
      <ReviewForm movieId={id} onReviewSuccess={fetchMovies} />
    </>
  );
}
