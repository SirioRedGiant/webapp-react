import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieList() {
  //  lo stato per i film
  const [movies, setMovies] = useState([]);

  // chiamata all'API di Express
  function fetchMovies() {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        console.log(res.data);
        // Salviamo i dati che arrivano dal backend nello stato
        setMovies(res.data);
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei film", err);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);
}
