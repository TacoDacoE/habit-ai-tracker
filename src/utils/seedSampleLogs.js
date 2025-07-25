import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function seedSampleLogsIfEmpty() {
  const logsCollection = collection(db, "habitLogs");
  const snapshot = await getDocs(logsCollection);

  if (!snapshot.empty) {
    console.log("Firestore already has logs. Seeding skipped.");
    return;
  }

  const response = await fetch("/data/sampleLogs.json");
  const sampleLogs = await response.json();

  for (const log of sampleLogs) {
    try {
      await addDoc(logsCollection, {
        ...log,
        date: new Date(log.date),
      });
    } catch (err) {
      console.error("Failed to insert log:", log, err);
    }
  }

  console.log("Sample logs seeded successfully.");
}
