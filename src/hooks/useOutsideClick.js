import { useEffect } from "react";

export default function useOutsideClick(refs, handler, active = true) {
  useEffect(() => {
    if (!active) return undefined;

    const handlePointerDown = (event) => {
      const clickedInside = refs.some((ref) =>
        ref.current?.contains(event.target),
      );

      if (!clickedInside) {
        handler(event);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [active, handler, refs]);
}
