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

        {/* Informazioni */}
        <div className="col-md-8">
          <h2 className="display-5 fw-bold">{movie.title}</h2>
          <p className="text-muted mb-4">
            Regia di <strong>{movie.director}</strong> | Anno:{" "}
            {movie.release_year}
          </p>
          <div className="bg-light p-3 rounded mb-5">
            <h5>Descrizione/riassunto</h5>
            <p className="lead">{movie.abstract}</p>
          </div>

          {/* RECENSIONI */}
          <div className="reviews-section">
            <h3 className="mb-4 border-bottom pb-2">Recensioni degli utenti</h3>

            {reviews && reviews.length > 0 ? (
              <div className="list-group">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="list-group-item list-group-item-action p-3 mb-2 border rounded shadow-sm"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1 fw-bold text-primary">
                        {review.name}
                      </h6>
                      <span className="badge bg-warning text-dark">
                        Voto: {review.vote}/5
                      </span>
                    </div>
                    <p className="mb-1 mt-2 text-secondary">"{review.text}"</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">
                Ancora nessuna recensione. Potresti essere il primo, affrettati!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
