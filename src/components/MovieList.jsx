export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <ul>
          <li>{movie.title}</li>
          <li>{movie.director}</li>
          <li>{movie.genre}</li>
          <li>{movie.release_year}</li>
          <li>{movie.abstract}</li>
          <li>{movie.image}</li>
        </ul>
      ))}
    </>
  );
}
