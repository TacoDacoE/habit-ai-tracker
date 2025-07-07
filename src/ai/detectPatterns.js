export function detectPatterns(habitLogs) {
  const grouped = {};

  habitLogs.forEach(log => {
    const date = new Date(log.date?.toDate?.() || log.date).toLocaleDateString();
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(log.status);
  });

  const successStreaks = Object.values(grouped).filter(logs =>
    logs.every(status => status === "completed")
  ).length;

  const missedDays = Object.values(grouped).filter(logs =>
    logs.every(status => status === "missed")
  ).length;

  return { successStreaks, missedDays };
}
