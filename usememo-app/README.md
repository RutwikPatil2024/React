# ⚡ useMemo Optimization Demo (React)

This project demonstrates how to optimize performance in a React application using the `useMemo` hook. It prevents unnecessary re-execution of expensive computations during re-renders.

---

## 📌 Features

* Increment counter without triggering heavy computation
* Perform an expensive calculation based on user input
* Optimize performance using `useMemo`
* Avoid unnecessary re-renders of costly logic

---

## 🛠️ Technologies Used

* React (Functional Components)
* React Hooks:

  * useState
  * useMemo
* JavaScript (ES6)

---

## 📂 Project Structure

src/
├── App.js
├── App.css
└── main.jsx / index.js

---

## 🚀 How It Works

* The app has two states:

  * `count` → for simple counter updates
  * `input` → for user input number

* An **expensive function** (`expensivetask`) runs a heavy loop and returns double the input value

* `useMemo` is used to:

  * Cache the result of the expensive function
  * Re-run it **only when `input` changes**
  * Prevent re-execution when `count` changes

---

## ▶️ Usage

1. Click **Increment** button

   * Updates count
   * Does NOT run expensive function

2. Enter a number in input field

   * Triggers expensive calculation
   * Displays doubled value

---

## 💡 Key Logic

### Expensive Function

```js
function expensivetask(num) {
  console.log("Inside Expensive task");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
```

---

### Optimization with useMemo

```js
let doublevalue = useMemo(() => expensivetask(input), [input]);
```

* Runs only when `input` changes
* Skips execution on other state updates

---

## ⚠️ Why useMemo is Important

Without `useMemo`:

* Expensive function runs on every render
* Even when unrelated state (like `count`) updates
* Leads to performance issues

With `useMemo`:

* Computation is cached
* Improves performance significantly

---

## 👨‍💻 Author

Rutwik Patil
