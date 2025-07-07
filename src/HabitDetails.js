import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const HabitDetails = ({ habitName }) => {
  const [logs, setLogs] = useState([]);
  const [completionRate, setCompletionRate] = useState(null);
  const [completedCount, setCompletedCount] = useState(0);
  const [missedCount, setMissedCount] = useState(0);

  useEffect(() => {
    if (!habitName) return;

    const fetchHabitLogs = async () => {
      const logsRef = collection(db, "habitLogs");
      const q = query(logsRef, where("habitName", "==", habitName));
      const snapshot = await getDocs(q);

      const habitLogs = snapshot.docs.map(doc => ({
        ...doc.data(),
        date: doc.data().date?.toDate().toLocaleDateString(),
      }));

      const completed = habitLogs.filter(log => log.status === "completed").length;
      const missed = habitLogs.filter(log => log.status === "missed").length;
      const total = habitLogs.length;
      const rate = total > 0 ? ((completed / total) * 100).toFixed(2) : 0;

      setLogs(habitLogs);
      setCompletedCount(completed);
      setMissedCount(missed);
      setCompletionRate(rate);
    };

    fetchHabitLogs();
  }, [habitName]);

  return (
    <div>
      <h2>Habit Details: {habitName}</h2>

      {logs.length === 0 ? (
        <p>No logs found for this habit.</p>
      ) : (
        <>
          <p>
            ✅ Completed: {completedCount} <br />
            ❌ Missed: {missedCount} <br />
            📊 Completion Rate: <strong>{completionRate}%</strong>
          </p>

          <h3>All Logs</h3>
          <ul>
            {logs.map((log, idx) => (
              <li key={idx}>
                {log.date} — <strong>{log.status}</strong>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default HabitDetails;

