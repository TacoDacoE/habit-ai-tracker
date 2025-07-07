# Habit AI Tracker

A mobile-responsive React app that helps individuals build good habits and eliminate bad ones. The app integrates Firebase for real-time cloud storage and is gradually incorporating AI-powered features like personalized summaries, habit loop analysis, reflection support, and habit bundling logic.

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
- Developed `StatsDashboard` to show completion rates and trend summaries
- Added `HabitDetails` to break down data for individual habits

### ✅ Week 7–8: AI Foundations & Habit Intelligence
- Refactored backend data schema for GPT-based summarization
- Designed pattern detection logic for identifying behavior trends
- Implemented internal habit bundling detection based on time and type
- Created stub logic for GPT reflection prompts and summaries
- Began backend integration planning for OpenAI API support

---

## Key Files

- [`src/firebaseConfig.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/firebaseConfig.js): Firebase app initialization  
- [`src/HabitForm.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/HabitForm.js): UI component for creating and saving new habits  
- [`src/HabitLogger.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/HabitLogger.js): Daily logging interface for habit completion tracking  
- [`src/CalendarView.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/CalendarView.js): View of logs grouped by date in a calendar-like format  
- [`src/StatsDashboard.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/StatsDashboard.js): Displays analytics and performance metrics  
- [`src/HabitDetails.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/HabitDetails.js): Breaks down performance for individual habits  
- [`demo/hello-world.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/demo/hello-world.js): Demo test component to verify environment setup

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/TacoDacoE/habit-ai-tracker.git
cd habit-ai-tracker
npm install
