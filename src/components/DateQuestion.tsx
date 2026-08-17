import { useState } from "react";

interface DateQuestionProps {
  onYes: () => void;
}

export default function DateQuestion({ onYes }: DateQuestionProps) {
  const [noAttempts, setNoAttempts] = useState(0);
  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  const noMessages = [
    "No 😐",
    "Are you sure?",
    "Really? 🥺",
    "Think again...",
    "Wrong answer 😂",
    "Nice try 😌",
    "You can't escape ❤️",
    "Just say YES!",
  ];

  const moveNoButton = () => {
    setNoAttempts((previous) => previous + 1);

    const maxX = Math.min(window.innerWidth * 0.3, 220);
    const maxY = Math.min(window.innerHeight * 0.25, 180);

    const x = Math.random() * maxX * 2 - maxX;
    const y = Math.random() * maxY * 2 - maxY;

    setNoPosition({ x, y });
  };

  const noText = noMessages[Math.min(noAttempts, noMessages.length - 1)];

  const yesScale = Math.min(1 + noAttempts * 0.08, 1.6);

  return (
    <main className="question-page">
      <div className="question-card">
        <div className="small-heart">♡</div>

        <p className="eyebrow">A very important question</p>

        <h1>
          Will you go on
          <br />a date with me?
        </h1>

        <p className="question-subtitle">I promise it'll be worth it. ❤️</p>

        <div className="button-area">
          <button
            className="yes-button"
            style={{
              transform: `scale(${yesScale})`,
            }}
            onClick={onYes}
          >
            Yes ❤️
          </button>

          <button
            className="no-button"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            }}
            onMouseEnter={moveNoButton}
            onFocus={moveNoButton}
            onClick={moveNoButton}
          >
            {noText}
          </button>
        </div>

        {noAttempts > 0 && (
          <p className="attempt-message">
            {noAttempts >= 5
              ? "Okay... I think the universe wants you to say YES. 😌"
              : "Hmm... that button seems to be malfunctioning. 🤔"}
          </p>
        )}

        <div className="made-for-you">Made especially for you ✨</div>
      </div>
    </main>
  );
}
