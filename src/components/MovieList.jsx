import { Link } from "react-router";
import { renderStars } from "../utils/utilities";

export default function MovieList({ movies }) {
  // se movies è nullo o non è un array, non crashare
  if (!movies || movies.length === 0) return <p>No film found</p>;

  return (
    <div className="row g-4">
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={movie.image}
              className="card-img-top object-fit-cover"
              alt={movie.title}
              style={{ height: "600px" }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">{movie.title}</h5>
              {/* media voti review in stelline */}
              <div className="mb-2">
                {renderStars(Math.round(movie.vote_avg))}
                <small className="ms-2 text-muted"></small>
              </div>
              <p className="card-text text-truncate">{movie.abstract}</p>
              {/* Link di react-router per la navigazione dichiarativa */}
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                Movie info
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
