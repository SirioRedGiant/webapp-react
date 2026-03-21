import { renderStars, getBadgeInfo, formatDate } from "../utils/utilities";

export default function ReviewCard({ review }) {
  const badgeInfo = getBadgeInfo(review.vote);

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
        {/* se la data esiste, la formattiamo, altrimenti  "Just now" --> per evitare che crashi se l'immagine è in ritardo */}
        Published
        {review.created_at ? formatDate(review.created_at) : "Just now"}
      </small>
    </div>
  );
}
