import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList";

export default function MovieListPage() {
  //  lo stato per i film
  const [movies, setMovies] = useState([]);

  // chiamata all'API di Express
  /**
   * Unfortunately, keeping any key in your React client, even if you are using gitignore and an .env file, is not secure. As pointed out by Claudiu Creanga, React environment variables are embedded in the build and are publicly accessible.

You should really only save API keys or secrets in your backend such as Node.js or Express.js. You can have your client send a request to your backend API, which can then make the actual API call with the API key and send the data back to your client.
   */

  function fetchMovies() {
    axios
      .get(`${import.meta.env.VITE_API_BACKEND_URL}/movies`)
      .then((res) => {
        console.log(res.data);
        // i dati che arrivano dal backend nello stato
        setMovies(res.data);
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei film", err);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  if (!movies) return <p>Loading films...</p>;
  return (
    <>
      <h1>Movie List</h1>
      <MovieList movies={movies} />
    </>
  );
}
