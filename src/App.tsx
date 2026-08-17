import { useState } from "react";
import DatePlanner from "./components/DatePlanner";
import DateQuestion from "./components/DateQuestion";
import FloatingHearts from "./components/FloatingHearts";

type Page = "question" | "planner";

function App() {
  const [page, setPage] = useState<Page>("question");

  return (
    <div className="app">
      <FloatingHearts />

      {page === "question" ? (
        <DateQuestion onYes={() => setPage("planner")} />
      ) : (
        <DatePlanner onBack={() => setPage("question")} />
      )}
    </div>
  );
}

export default App;
