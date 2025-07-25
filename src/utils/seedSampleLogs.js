import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

export async function seedSampleLogsIfEmpty() {
  const logsCollection = collection(db, "habitLogs");
  const snapshot = await getDocs(logsCollection);

  if (!snapshot.empty) {
    console.log("Firestore already has logs. Seeding skipped.");
    return;
  }

  try {
    const response = await fetch("/data/sampleLogs.json");
    const sampleLogs = await response.json();

    for (const log of sampleLogs) {
      await addDoc(logsCollection, {
        ...log,
        date: Timestamp.fromDate(new Date(log.date)),
      });
    }

    console.log("✅ Sample logs seeded successfully.");
  } catch (err) {
    console.error("❌ Failed to seed sample logs:", err);
  }
}
