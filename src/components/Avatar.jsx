export default function Avatar({ initials, size = "lg", tone = "cc-bg1" }) {
  return <div className={`cc-av cc-${size} ${tone}`}>{initials}</div>;
}
