import ReviewCard from "./ReviewCard";

export default function MovieDetail({ movie, reviews }) {
  return (
    <section className="movie-detail py-4">
      <div className="row">
        {/* Locandina */}
        <div className="col-md-4">
          <img
            src={movie.image}
            alt={movie.title}
            className="img-fluid rounded shadow-lg"
          />
        </div>

        {/* Colonna Destra: Informazioni Film + Recensioni */}
        <div className="col-md-8">
          {/* DETTAGLI FILM: Recuperiamo i dati che avevamo "perso" */}
          <div className="movie-info mb-5">
            <h1 className="display-2 fw-bold">{movie.title}</h1>
            <h5 className="text-muted mb-3">
              Directed by <strong>{movie.director}</strong> |
              {` ${movie.release_year}`}
            </h5>
            <span className="badge bg-info mb-4">{movie.genre}</span>

            <div className="bg-light p-4 rounded shadow-sm">
              <h5 className="fw-bold">Logline</h5>
              <p className="lead mb-0">{movie.abstract}</p>
            </div>
          </div>

          {/* SEZIONE RECENSIONI */}
          <div className="reviews-section mt-5">
            <h3 className="mb-4 border-bottom pb-2 text-primary">
              User Reviews
            </h3>

            {reviews && reviews.length > 0 ? (
              <div className="reviews-list">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            ) : (
              <p className="text-muted fst-italic">
                No reviews yet for this movie. Be the First!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
