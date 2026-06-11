export function renderTextParts(parts = []) {
  return parts.map((part, index) => {
    const key = `${part.text}-${index}`;

    if (part.strong) {
      return <strong key={key}>{part.text}</strong>;
    }

    if (part.emphasis) {
      return <em key={key}>{part.text}</em>;
    }

    return <span key={key}>{part.text}</span>;
  });
}
