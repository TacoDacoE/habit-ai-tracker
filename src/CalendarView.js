import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const CalendarView = () => {
  const [logsByDate, setLogsByDate] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "habitLogs"));
        const logs = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const date = data.date?.toDate().toLocaleDateString();
          return {
            habitName: data.habitName,
            status: data.status,
            date,
          };
        });

        // Group by date
        const grouped = {};
        logs.forEach(log => {
          if (!grouped[log.date]) grouped[log.date] = [];
          grouped[log.date].push(log);
        });

        setLogsByDate(grouped);
      } catch (err) {
        console.error("Error fetching logs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>📅 Calendar View</h2>

      {loading ? (
        <p>Loading habit logs...</p>
      ) : Object.keys(logsByDate).length === 0 ? (
        <p>No logs to display yet.</p>
      ) : (
        Object.entries(logsByDate)
          .sort((a, b) => new Date(b[0]) - new Date(a[0])) // Newest first
          .map(([date, entries]) => (
            <div key={date} style={{ marginBottom: "1.5rem" }}>
              <h4>{date}</h4>
              <ul>
                {entries.map((log, index) => (
                  <li key={index}>
                    <strong>{log.habitName}</strong> —{" "}
                    {log.status === "completed" ? "✅ Completed" : "❌ Missed"}
                  </li>
                ))}
              </ul>
            </div>
          ))
      )}
    </div>
  );
};

export default CalendarView;
