/**
 * funzione che prende il voto che arriva dal database review.vote
 * e restituisce il numero di stelline
 * @param {BigInteger} vote
 * @returns
 */
export const renderStars = (vote) => {
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
export const getBadgeInfo = (vote) => {
  const numericVote = Number(vote);
  if (numericVote === 5) return { color: "bg-success", text: "Must Watch" };
  if (numericVote >= 3)
    return { color: "bg-info text-dark", text: "Recommended" };
  return { color: "bg-danger", text: "Skippable" };
};

/**
 * Funzione che data una stringa la ritorna formattata in base alla località selezionata
 * @param {string} dateString
 * @returns
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
