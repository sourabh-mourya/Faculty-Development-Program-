export default function SectionHeader({ eyebrow, title, description, className = "" }) {
  return (
    <div className={className}>
      <div className="sec-eyebrow">{eyebrow}</div>
      <h2 className="sec-title">{title}</h2>
      <div className="sec-divider"></div>
      {description ? <p className="sec-desc">{description}</p> : null}
    </div>
  );
}
