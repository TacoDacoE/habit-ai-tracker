# Habit AI Tracker

A mobile-responsive React app that helps individuals build good habits and eliminate bad ones. This app integrates Firebase for cloud storage and is gradually incorporating AI-powered features like personalized summaries, habit loop analysis, and reflection support.

---

## Features Completed (Week 1–6)

###  Week 1–2: Project Setup & Backend Integration
- Project scope and technical plan finalized
- Firebase backend configured
- Repository initialized with functional “Hello World” component

###  Week 3–4: Core Habit Tracking Features
- Habit creation form built (name + type input)
- Data submission to Firestore with timestamp support
- Basic Firebase CRUD logic tested

###  Week 5–6: Logging UI + Statistical Analysis Setup
- Daily habit logging interface implemented
- Calendar-based habit overview integrated
- Initial statistical dashboard showing streaks and completion trends
- Firebase read/query logic optimized for history analysis
- Groundwork laid for GPT-powered daily summaries and pattern detection

---

## Key Files

- [`src/firebaseConfig.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/firebaseConfig.js): Firebase app initialization  
- [`src/HabitForm.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/HabitForm.js): UI component for creating and saving new habits  
- [`src/LoggingDashboard.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/src/LoggingDashboard.js): (Planned or in-progress) logging and visualization interface  
- [`demo/hello-world.js`](https://github.com/TacoDacoE/habit-ai-tracker/blob/main/demo/hello-world.js): Demo component to verify project setup

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/TacoDacoE/habit-ai-tracker.git
cd habit-ai-tracker
npm install
