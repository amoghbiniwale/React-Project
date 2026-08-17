import { useMemo } from "react";

const hearts = ["❤️", "💗", "💕", "✨", "💖", "♡"];

export default function FloatingHearts() {
  const items = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        heart: hearts[index % hearts.length],
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 8}s`,
        size: `${14 + Math.random() * 18}px`,
      })),
    [],
  );

  return (
    <div className="floating-hearts" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="floating-heart"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size,
          }}
        >
          {item.heart}
        </span>
      ))}
    </div>
  );
}
