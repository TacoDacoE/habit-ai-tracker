import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { generateDailySummary } from "./ai/generateSummary";
import { detectPatterns } from "./ai/detectPatterns";
import { recommendHabitBundles } from "./utils/habitBundler";

const HabitDetails = ({ habitName }) => {
  const [logs, setLogs] = useState([]);
  const [completionRate, setCompletionRate] = useState(null);
  const [completedCount, setCompletedCount] = useState(0);
  const [missedCount, setMissedCount] = useState(0);
  const [summary, setSummary] = useState("");
  const [patterns, setPatterns] = useState(null);
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    if (!habitName) return;

    const fetchHabitLogs = async () => {
      const logsRef = collection(db, "habitLogs");
      const q = query(logsRef, where("habitName", "==", habitName));
      const snapshot = await getDocs(q);

      const habitLogs = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          ...data,
          date: data.date?.toDate?.() || new Date(),
        };
      });

      const completed = habitLogs.filter(log => log.status === "completed").length;
      const missed = habitLogs.filter(log => log.status === "missed").length;
      const total = habitLogs.length;
      const rate = total > 0 ? ((completed / total) * 100).toFixed(2) : "0.00";

      setLogs(habitLogs);
      setCompletedCount(completed);
      setMissedCount(missed);
      setCompletionRate(rate);

      // Generate insights
      const summaryText = await generateDailySummary(habitLogs);
      const patternStats = detectPatterns(habitLogs);
      const bundleSuggestions = recommendHabitBundles(habitLogs);

      setSummary(summaryText);
      setPatterns(patternStats);
      setBundles(bundleSuggestions);
    };

    fetchHabitLogs();
  }, [habitName]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>📌 Habit Details: {habitName}</h2>

      {logs.length === 0 ? (
        <p>No logs found for this habit.</p>
      ) : (
        <>
          <p>
            ✅ Completed: {completedCount} <br />
            ❌ Missed: {missedCount} <br />
            📊 Completion Rate: <strong>{completionRate}%</strong>
          </p>

          <h3>🧠 AI Summary</h3>
          <p>{summary}</p>

          {patterns && (
            <>
              <h3>📈 Behavior Patterns</h3>
              <p>
                🔥 Streak Days: {patterns.successStreaks} <br />
                🚫 Missed Days: {patterns.missedDays}
              </p>
            </>
          )}

          {bundles.length > 0 && (
            <>
              <h3>🧩 Habit Bundles (Time-Based)</h3>
              <ul>
                {bundles.map((b, idx) => (
                  <li key={idx}>
                    <strong>{b.timeBlock}</strong>: {b.habits.join(", ")}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h3>📅 All Logs</h3>
          <ul>
            {logs.map((log, idx) => (
              <li key={idx}>
                {log.date.toLocaleDateString()} — <strong>{log.status}</strong>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default HabitDetails;
