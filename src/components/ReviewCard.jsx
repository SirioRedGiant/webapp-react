export default function ReviewCard({ review }) {
  /**
   * funzione che prende il voto che arriva dal database review.vote
   * e restituisce il numero di stelline
   * @param {BigInteger} vote
   * @returns
   */
  const renderStars = (vote) => {
    const stars = [];
    const maxVote = 5; // Definiamo il tetto massimo (poteva essere la length di un array)

    for (let i = 1; i <= maxVote; i++) {
      const starClass = i <= vote ? "bi-star-fill" : "bi-star";
      stars.push(
        <span key={i} className={`bi ${starClass} text-warning`}></span>,
      );
    }
    return stars;
  };
  /**
   * Funzione che dato un valore restituisce in base a determinate condizioni un testo
   * ed un colore per il background per il --> badge validità
   * @param {BigInteger} vote
   * @returns
   */
  const getBadgeInfo = (vote) => {
    if (vote === 5) return { color: "bg-success", text: "Must Watch" };
    if (vote >= 3) return { color: "bg-info text-dark", text: "Recommended" };
    return { color: "bg-danger", text: "Skippable" };
  };

  const badgeInfo = getBadgeInfo(review.vote);

  /**
   * Funzione che data una stringa la ritorna formattata in base alla località selezionata
   * @param {string} dateString
   * @returns
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="list-group-item p-3 mb-3 border rounded shadow-sm bg-white">
      <div className="d-flex w-100 justify-content-between align-items-start">
        {/* Avatar e Nome */}
        <div className="d-flex align-items-center">
          <div
            className="rounded-circle text-white d-flex align-items-center justify-content-center shadow-sm"
            style={{
              width: "45px",
              height: "45px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "purple",
            }}
          >
            {/* AVATAR */}
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div className="ms-3">
            <h6 className="mb-0 fw-bold text-dark">{review.name}</h6>
          </div>
        </div>

        {/* Stelline/voto */}
        <div className="text-end">
          <span className={`badge rounded-pill mb-1 ${badgeInfo.color}`}>
            {badgeInfo.text}
          </span>
          <div className="small">{renderStars(review.vote)}</div>
        </div>
      </div>

      {/* recensione */}
      <p className="mt-3 mb-2 text-secondary fst-italic">"{review.text}"</p>

      <small className="text-muted d-block text-end border-top pt-2">
        Pubbliched {formatDate(review.created_at)}
      </small>
    </div>
  );
}
