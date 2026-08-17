import { useState } from "react";

interface DatePlannerProps {
  onBack: () => void;
}

const dateOptions = [
  {
    id: "dinner",
    emoji: "🍝",
    title: "Dinner",
    description: "Good food & better company",
  },
  {
    id: "cafe",
    emoji: "☕",
    title: "Cute Café",
    description: "Coffee, conversations & us",
  },
  {
    id: "movie",
    emoji: "🎬",
    title: "Movie",
    description: "You pick the movie, I'll bring snacks",
  },
  {
    id: "drive",
    emoji: "🚗",
    title: "Long Drive",
    description: "Music, talks & absolutely nowhere to be",
  },
  {
    id: "surprise",
    emoji: "🎁",
    title: "Surprise Me",
    description: "I'll take care of everything",
  },
];

export default function DatePlanner({ onBack }: DatePlannerProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const canConfirm = selectedDate && selectedDay;

  if (confirmed) {
    return (
      <main className="planner-page">
        <div className="confirmation-card">
          <div className="confirmation-heart">❤️</div>

          <p className="eyebrow">It's a date!</p>

          <h1>See you there. 🥰</h1>

          <p className="confirmation-text">
            You chose{" "}
            <strong>
              {dateOptions.find((item) => item.id === selectedDate)?.title}
            </strong>{" "}
            for <strong>{selectedDay}</strong>.
          </p>

          <div className="confirmation-message">
            Now all that's left is for you to show up looking as cute as you
            always do. ❤️
          </div>

          <button className="primary-button" onClick={onBack}>
            Go back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="planner-page">
      <div className="planner-container">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>

        <div className="planner-header">
          <p className="eyebrow">Okay, you said YES ❤️</p>

          <h1>Let's plan our date.</h1>

          <p>
            Because apparently saying yes wasn't enough. Now you have to help me
            choose. 😌
          </p>
        </div>

        <section className="planner-section">
          <h2>What should we do?</h2>

          <div className="date-options">
            {dateOptions.map((option) => (
              <button
                key={option.id}
                className={`date-option ${
                  selectedDate === option.id ? "selected" : ""
                }`}
                onClick={() => setSelectedDate(option.id)}
              >
                <span className="option-emoji">{option.emoji}</span>

                <span className="option-content">
                  <strong>{option.title}</strong>
                  <small>{option.description}</small>
                </span>

                <span className="option-check">
                  {selectedDate === option.id ? "✓" : ""}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="planner-section">
          <h2>When are you free?</h2>

          <div className="day-options">
            {["Friday", "Saturday", "Sunday"].map((day) => (
              <button
                key={day}
                className={`day-option ${
                  selectedDay === day ? "selected" : ""
                }`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </section>

        <button
          className="confirm-button"
          disabled={!canConfirm}
          onClick={() => setConfirmed(true)}
        >
          Confirm our date ❤️
        </button>
      </div>
    </main>
  );
}
