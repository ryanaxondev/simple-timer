# ⏱️ React Timer App

A clean, accessible, and keyboard-friendly **React + TypeScript** timer with reusable hooks, organized architecture, and persistent state.

---

## 🔖 Badges

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-fast-purple)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📸 Preview

```
./assets/preview.gif
```

---

## 🚀 Demo

Live Version:
**[https://ryanaxondev.github.io/simple-timer](https://ryanaxondev.github.io/simple-timer)**

---

## 🚀 Overview

This project is a minimal yet extensible timer application built with **React**, showcasing how to combine hooks, compose components, and build UX-focused interactions.

It highlights:

- Clean UI and clear separation of concerns
- Keyboard-first interaction patterns
- A reusable auto-focus hook
- Persistent timer state using `localStorage`
- A maintainable and scalable folder structure

This project is a great practice piece for anyone learning React fundamentals and intermediate architectural patterns.

---

## ✨ Features

### **Start / Pause / Reset Controls**

Simple, intuitive controls built using `setInterval`, `useState`, and `useRef`.

---

### **Smart Auto-Focus Behavior**

The **Start** button automatically focuses when:

- The app loads
- The timer is paused
- The timer is reset

This is implemented via a reusable custom hook (`useAutoFocusRef`), keeping UI logic clean and testable.

---

### **Persistent Timer**

The current time is stored in `localStorage`, ensuring:

- Refreshing the page does **not** reset progress
- Resetting clears persisted state

---

### **Modular Component Architecture**

Logic and UI are cleanly separated across:

- Components (`TimerDisplay`, `TimerControls`)
- Hooks (`useAutoFocusRef`)
- Controller (`App.tsx`)

This makes the codebase intuitive, scalable, and beginner-friendly.

---

## 📂 Project Structure

```
src
├── App.tsx
├── assets/
├── components/
│   ├── TimerControls.tsx
│   └── TimerDisplay.tsx
├── hooks/
│   └── useAutoFocusRef.ts
├── index.css
└── main.tsx
```

### **Structure Explanation**

- **components/** → UI-only, render-focused building blocks
- **hooks/** → Reusable logic decoupled from UI
- **App.tsx** → Business rules and main timer logic
- **index.css** → Tailwind configuration and global utilities

This structure prioritizes clarity and long-term maintainability.

---

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**

Fast, modern, strongly typed, and developer-friendly.

---

## 🔧 Installation & Setup

```bash
npm install
npm run dev
```

Then visit:

```
http://localhost:5173
```

---

## 🧠 Why This Project Matters

This mini-app is a perfect exercise for learning or improving:

- Managing state + side effects
- Using `useRef` for non-render values
- Building reusable custom hooks
- Designing keyboard-friendly UI flows
- Synchronizing UI state with `localStorage`
- Applying clean component architecture
- Separating UI vs. logic (a core skill in scalable React apps)

---

## 🧱 Future Enhancements

Potential improvements:

- Lap / Split functionality
- Countdown mode
- Pomodoro timer mode
- Sound effects on start/pause
- Dark/light theme switcher
- Customizable interval speed
- Extracting interval logic into a `useTimer` hook
- Adding accessibility announcements (ARIA live region)
- Unit tests with Vitest

---

## 📄 License

MIT — feel free to use, modify, and build upon it.
