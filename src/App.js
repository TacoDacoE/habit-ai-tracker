import React, { useState } from "react";
import HabitForm from "./HabitForm";
import HabitLogger from "./HabitLogger";
import CalendarView from "./CalendarView";
import StatsDashboard from "./StatsDashboard";
import HabitDetails from "./HabitDetails";

const App = () => {
  const [selectedHabit, setSelectedHabit] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>🌱 Habit AI Tracker</h1>

      <section>
        <HabitForm />
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <HabitLogger />
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <CalendarView />
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <StatsDashboard />
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <h2>🔎 View Habit Details</h2>
        <input
          type="text"
          value={selectedHabit}
          onChange={(e) => setSelectedHabit(e.target.value)}
          placeholder="Enter habit name (e.g. 'Read')"
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        {selectedHabit && <HabitDetails habitName={selectedHabit} />}
      </section>
    </div>
  );
};

export default App;
