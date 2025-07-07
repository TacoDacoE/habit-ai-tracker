export function recommendHabitBundles(habitLogs) {
  const bundles = {};

  habitLogs.forEach(log => {
    const date = new Date(log.date?.toDate?.() || log.date);
    const hour = date.getHours();

    if (!bundles[hour]) bundles[hour] = [];
    bundles[hour].push(log.habitName);
  });

  return Object.entries(bundles)
    .filter(([_, habits]) => habits.length > 1)
    .map(([hour, habits]) => ({
      timeBlock: `${hour}:00`,
      habits: [...new Set(habits)],
    }));
}
