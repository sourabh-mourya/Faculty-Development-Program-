import { useState } from "react";

export default function TrainerCard({ trainer }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="trainer-card">
      <div className="trainer-img-wrap">
        {!imageFailed ? (
          <img
            src={trainer.image}
            alt={trainer.name}
            onError={() => setImageFailed(true)}
          />
        ) : null}
        <div
          className="trainer-img-placeholder"
          style={{ display: imageFailed ? "flex" : "none" }}
        >
          <span className="ti-initials">{trainer.initials}</span>
        </div>
      </div>
      <div className="trainer-body">
        <div className="trainer-name">{trainer.name}</div>
        <div className="trainer-designation">
          {trainer.designation}
          <br />
          {trainer.university}
        </div>
        <span className="trainer-badge">{trainer.badge}</span>
      </div>
    </div>
  );
}
