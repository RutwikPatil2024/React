# ⏱️ Stopwatch App (React)

A simple and functional stopwatch application built using React. This app allows users to start, stop, and reset a timer that updates every second.

---

## 📌 Features

* Start the timer
* Stop/Pause the timer
* Reset the timer to zero
* Real-time second updates using React state

---

## 🛠️ Technologies Used

* React (Functional Components)
* React Hooks:

  * useState
  * useRef
* JavaScript (ES6)

---

## 📂 Project Structure

src/
├── App.js
├── App.css
└── main.jsx / index.js

---

## 🚀 How It Works

* The timer value is stored in a state variable (`time`)
* The timer increments every second using `setInterval`
* A reference (`useRef`) is used to store the interval ID
* This allows control over starting and stopping the timer

---

## ▶️ Usage

1. Click **Start Timer** to begin counting
2. Click **Stop Timer** to pause
3. Click **Reset Timer** to stop and reset to 0

---

## 💡 Key Logic

### Timer Increment

```js
settime(time => time + 1);
```

This ensures the latest state value is used when updating.

---

## 👨‍💻 Author

Rutwik Patil
