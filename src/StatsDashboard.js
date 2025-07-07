import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const StatsDashboard = () => {
  const [totalLogs, setTotalLogs] = useState(0);
  const [completedLogs, setCompletedLogs] = useState(0);
  const [missedLogs, setMissedLogs] = useState(0);
  const [completionRate, setCompletionRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculateStats = async () => {
      setLoading(true);
      try {
        const snapshot = await getDocs(collection(db, "habitLogs"));
        const logs = snapshot.docs.map(doc => doc.data());

        const completed = logs.filter(log => log.status === "completed").length;
        const missed = logs.filter(log => log.status === "missed").length;
        const total = logs.length;

        setTotalLogs(total);
        setCompletedLogs(completed);
        setMissedLogs(missed);
        setCompletionRate(total > 0 ? ((completed / total) * 100).toFixed(2) : "0.00");
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    calculateStats();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>📊 Stats Dashboard</h2>

      {loading ? (
        <p>Loading statistics...</p>
      ) : totalLogs === 0 ? (
        <p>No habit logs available to calculate statistics.</p>
      ) : (
        <div>
          <p>Total logs: <strong>{totalLogs}</strong></p>
          <p>✅ Completed: <strong>{completedLogs}</strong></p>
          <p>❌ Missed: <strong>{missedLogs}</strong></p>
          <p>📈 Completion Rate: <strong>{completionRate}%</strong></p>
        </div>
      )}
    </div>
  );
};

export default StatsDashboard;
