# Habit AI Tracker

A mobile-responsive React app that helps individuals build good habits and eliminate bad ones. The app integrates Firebase for real-time habit storage and now includes AI-powered features such as personalized summaries, behavior pattern detection, and habit bundling recommendations.

---

## Features Completed (Week 1–8)

### Week 1–2: Project Setup & Backend Integration
- Finalized project scope and technical plan  
- Initialized GitHub repository and Firebase project  
- Configured Firestore for real-time habit data storage  
- Verified React setup with Hello World demo component  

### Week 3–4: Core Habit Tracking Features
- Developed `HabitForm` component to create and save new habits  
- Connected form input to Firestore with timestamped entries  
- Supported basic habit creation, editing, and deletion  

### Week 5–6: Logging, Calendar View & Statistics
- Built `HabitLogger` to track daily habit status (completed/missed)  
- Implemented `CalendarView` to display logs grouped by date  
- Developed `StatsDashboard` to show completion rates and habit trends  
- Added `HabitDetails` to break down data for individual habits  

### Week 7–8: AI Intelligence & Insight Features
- Added `generateDailySummary()` function to simulate GPT-style feedback  
- Implemented behavior pattern detection using `detectPatterns.js`  
- Added habit bundling logic via `recommendHabitBundles.js`  
- Updated `HabitDetails.js` to show AI summaries, performance trends, and bundle insights  
- Organized project logic into modular folders (`/ai`, `/utils`)  

---

## Key Files

- `src/firebaseConfig.js`: Firebase app initialization  
- `src/HabitForm.js`: UI component for creating and saving new habits  
- `src/HabitLogger.js`: Daily logging interface for habit completion tracking  
- `src/CalendarView.js`: Displays logs grouped by date in a calendar-like format  
- `src/StatsDashboard.js`: Completion rate and trend analytics  
- `src/HabitDetails.js`: Breakdown of individual habit performance with AI insights  
- `src/ai/generateSummary.js`: Simulates GPT-style habit summaries  
- `src/ai/detectPatterns.js`: Detects success streaks and missed day trends  
- `src/utils/habitBundler.js`: Suggests bundled habits by time of day  
- `demo/hello-world.js`: Demo component used to verify project setup  

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/TacoDacoE/habit-ai-tracker.git
cd habit-ai-tracker
npm install
## Dataset & Model Use

To simulate real user behavior, I invited a participant to log realistic habit-tracking data, generating a dataset of 100 habit logs over the past 27 days. These logs are stored in Firebase and accessed by AI utilities.

The AI feedback system simulates OpenAI's GPT-style summaries and runs locally. While not using a hosted model, the modular structure allows real OpenAI API integration when credentials are provided.
```
### 2. Create a `.env` File

Create a `.env` file in the root directory and add your OpenAI API key:

> This is required for enabling AI-powered features such as daily summaries and pattern detection.

### 3. Start the App

Launch the app in development mode:

---

## Dataset & Model Use
To simulate real user behavior, I invited a participant to log realistic habit-tracking data, generating a dataset of 100 habit logs over the past 27 days. These logs are stored in Firebase and accessed by AI utilities.

The AI feedback system simulates OpenAI's GPT-style summaries and runs locally. While not using a hosted model, the modular structure allows real OpenAI API integration when credentials are provided.


---
## License

MIT

---

