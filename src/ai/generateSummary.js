export async function generateDailySummary(habitLogs) {
  const completed = habitLogs.filter(l => l.status === "completed").length;
  const total = habitLogs.length;

  return `You completed ${completed} out of ${total} habits today. ${
    completed / total > 0.8
      ? "Great consistency! Keep it going."
      : "Try reviewing missed habits and planning a recovery routine."
  }`;
}
