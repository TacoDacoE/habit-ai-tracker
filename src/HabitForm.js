import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const HabitForm = () => {
  const [habitName, setHabitName] = useState("");
  const [habitType, setHabitType] = useState("good");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (habitName.trim() === "") return;

    try {
      await addDoc(collection(db, "habits"), {
        name: habitName,
        type: habitType,
        createdAt: new Date()
      });
      alert("Habit added successfully!");
      setHabitName("");
      setHabitType("good");
    } catch (error) {
      console.error("Error adding habit:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Habit</h2>
      <input
        type="text"
        placeholder="Enter habit name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <select
        value={habitType}
        onChange={(e) => setHabitType(e.target.value)}
      >
        <option value="good">Good Habit</option>
        <option value="bad">Bad Habit</option>
      </select>
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
