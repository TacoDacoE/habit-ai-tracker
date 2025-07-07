# Habit AI Tracker

A mobile-responsive React app that helps individuals build good habits and eliminate bad ones. The app integrates Firebase for real-time habit storage and now includes AI-powered features such as personalized summaries, behavior pattern detection, and habit bundling recommendations.

---

## Features Completed (Week 1–8)

### ✅ Week 1–2: Project Setup & Backend Integration
- Finalized project scope and technical plan
- Initialized GitHub repository and Firebase project
- Configured Firestore for real-time habit data storage
- Verified React setup with Hello World demo component

### ✅ Week 3–4: Core Habit Tracking Features
- Developed `HabitForm` component to create and save new habits
- Connected form input to Firestore with timestamped entries
- Supported basic habit creation, editing, and deletion

### ✅ Week 5–6: Logging, Calendar View & Statistics
- Built `HabitLogger` to track daily habit status (completed/missed)
- Implemented `CalendarView` to display logs grouped by date
- Developed `StatsDashboard` to show completion rates and habit trends
- Added `HabitDetails` to break down data for individual habits

### ✅ Week 7–8: AI Intelligence & Insight Features
- Added `generateDailySummary()` function to simulate GPT-style feedback
- Implemented behavior pattern detection using `detectPatterns.js`
- Added habit bundling logic via `recommendHabitBundles.js`
- Updated `HabitDetails.js` to show AI summaries, performance trends, and bundle insights
- Organized project logic into modular folders (`/ai`, `/utils`)

---

## Key Files

- [`src/firebaseConfig.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/firebaseConfig.js): Firebase app initialization  
- [`src/HabitForm.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/HabitForm.js): UI component for creating and saving new habits  
- [`src/HabitLogger.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/HabitLogger.js): Daily logging interface for habit completion tracking  
- [`src/CalendarView.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/CalendarView.js): Displays logs grouped by date in a calendar-like format  
- [`src/StatsDashboard.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/StatsDashboard.js): Completion rate and trend analytics  
- [`src/HabitDetails.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/HabitDetails.js): Breakdown of individual habit performance with AI insights  
- [`src/ai/generateSummary.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/ai/generateSummary.js): Simulates GPT-style habit summaries  
- [`src/ai/detectPatterns.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/ai/detectPatterns.js): Detects success streaks and missed day trends  
- [`src/utils/habitBundler.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/utils/habitBundler.js): Suggests bundled habits by time of day  
- [`demo/hello-world.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/demo/hello-world.js): Demo component used to verify project setup

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/TacoDacoE/habit-ai-tracker.git
cd habit-ai-tracker
npm install
