import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList";

export default function MovieListPage() {
  //  lo stato per i film
  const [movies, setMovies] = useState([]);

  // chiamata all'API di Express
  function fetchMovies() {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((res) => {
        console.log(res.data);
        // i dati che arrivano dal backend nello stato
        setMovies(res.data.result);
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei film", err);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <h1>Movie List</h1>
      <MovieList movies={movies} />
    </>
  );
}
