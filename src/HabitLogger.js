import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const HabitLogger = () => {
  const [habitName, setHabitName] = useState("");
  const [status, setStatus] = useState("completed");
  const [message, setMessage] = useState("");

  const handleLog = async () => {
    if (!habitName.trim()) {
      setMessage("Please enter a habit name.");
      return;
    }

    try {
      await addDoc(collection(db, "habitLogs"), {
        habitName: habitName.trim(),
        status,
        date: Timestamp.now(),
      });

      setMessage("Habit logged successfully!");
      setHabitName("");
      setStatus("completed");
    } catch (error) {
      console.error("Error logging habit:", error);
      setMessage("Failed to log habit.");
    }
  };

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h2>Log Today's Habit</h2>

      <input
        type="text"
        placeholder="Enter habit name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      >
        <option value="completed">Completed ✅</option>
        <option value="missed">Missed ❌</option>
      </select>

      <button onClick={handleLog} style={{ padding: "0.5rem 1rem" }}>
        Log Habit
      </button>

      {message && (
        <p style={{ marginTop: "1rem", color: message.includes("success") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default HabitLogger;
