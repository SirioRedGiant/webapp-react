import { Link } from "react-router";

export default function MovieList({ movies }) {
  // se movies è nullo o non è un array, non crashare
  if (!movies || movies.length === 0) return <p>No film found</p>;

  return (
    <div className="row g-4">
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src={movie.image} className="card-img-top" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title fw-bold">{movie.title}</h5>
              <p className="card-text text-truncate">{movie.abstract}</p>
              {/* Usa Link di react-router-dom per la navigazione dichiarativa */}
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                Dettagli
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
