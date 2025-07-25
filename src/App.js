import React, { useState, useEffect } from "react";
import HabitForm from "./HabitForm";
import HabitLogger from "./HabitLogger";
import CalendarView from "./CalendarView";
import StatsDashboard from "./StatsDashboard";
import HabitDetails from "./HabitDetails";
import AISuggestions from "./AISuggestions";
import { seedSampleLogsIfEmpty } from "./utils/seedSampleLogs";
import './App.css';

const App = () => {
  const [selectedHabit, setSelectedHabit] = useState("");

  useEffect(() => {
    seedSampleLogsIfEmpty(); // ✅ Seed sample logs only if Firestore is empty
  }, []);

  return (
    <div className="app-container">
      <h1>🌱 Habit AI Tracker</h1>

      <section>
        <HabitForm />
      </section>

      <hr />

      <section>
        <HabitLogger />
      </section>

      <hr />

      <section>
        <CalendarView />
      </section>

      <hr />

      <section>
        <StatsDashboard />
      </section>

      <hr />

      <section>
        <h2>🔎 View Habit Details</h2>
        <input
          type="text"
          value={selectedHabit}
          onChange={(e) => setSelectedHabit(e.target.value)}
          placeholder="Enter habit name (e.g. 'Read')"
        />
        {selectedHabit && <HabitDetails habitName={selectedHabit} />}
      </section>

      <hr />

      <section>
        <AISuggestions />
      </section>
    </div>
  );
};

export default App;
