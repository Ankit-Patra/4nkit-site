# 4nkit.dev // TERMINAL PORTFOLIO

> "I prefer clean code over complex abstractions and terminal commands over GUIs."

![Status](https://img.shields.io/badge/SYSTEM-ONLINE-39FF14?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A retro-styled, highly interactive developer portfolio that simulates a Linux terminal environment. Recently refactored from vanilla HTML/JS to a modular **React + Vite** architecture.

## 🟢 Live System
**Access Terminal:** [https://4nkit.dev](https://4nkit.dev)

---

## ⚡ Features

* **🖥️ Authentic CRT Experience:** Custom scanlines, vignette, and text-shadow glow effects.
* **🚀 BIOS Boot Sequence:** Simulated startup logs and kernel loading animations.
* **⌨️ Typewriter Engine:** Custom hook (`useTypewriter`) for realistic text output.
* **🖱️ Scroll Spy Navigation:** Bidirectional fade animations—elements slide *up* when scrolling down, and *down* when scrolling up.
* **📂 Modular Architecture:** All data (Skills, History, Projects) is separated into JSON constants for easy updating.
* **📱 Responsive Design:** Fully functional terminal UI on mobile devices.

## 🛠️ Tech Stack

* **Core:** React.js (v18), Vite
* **Styling:** Pure CSS3 (Variables, Keyframes, Flexbox/Grid)
* **Deployment:** GitHub Pages
* **Hooks:** Custom `useScrollSpy` & `useTypewriter`

## 📂 Project Structure

The project has been migrated to a clean, component-based structure:

```text
src/
├── components/
│   ├── layout/       # BootScreen, Navbar, Footer
│   ├── sections/     # Individual page sections (Hero, About, Projects...)
│   └── ui/           # Reusable UI bits (SectionHeader, Buttons)
├── data/
│   └── constants.js  # 📝 EDIT THIS FILE to update content!
├── hooks/            # Animation logic (Scroll detection, Typing)
└── App.jsx           # Main layout orchestrator