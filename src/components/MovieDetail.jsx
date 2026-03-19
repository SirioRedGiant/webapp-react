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

        {/* Film + Recensioni */}
        <div className="col-md-8">
          {/* DETTAGLI FILM */}
          <div className="movie-info mb-5">
            <h1 className="display-2 fw-bold">{movie.title}</h1>
            <h5 className="text-secondary mb-4 d-flex align-items-center">
              <span className="me-2">Directed by</span>
              <span className="text-primary fw-bolder fs-4">
                {movie.director}
              </span>
              <span className="mx-2 text-muted">|</span>
              <span className="badge bg-light text-dark border">
                {movie.release_year}
              </span>
            </h5>
            <div className="mb-3">
              <span
                className="badge rounded-pill px-3 py-2 shadow-sm"
                style={{
                  backgroundColor: "#400e0b",
                  color: "white",
                }}
              >
                <i className="bi bi-tags-fill me-2"></i>
                {movie.genre}
              </span>
            </div>
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
