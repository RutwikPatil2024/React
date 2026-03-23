# 🔄 React componentDidUpdate Lifecycle Example

This project demonstrates the behavior of **`componentDidUpdate()`** and **`shouldComponentUpdate()`** lifecycle methods in a React class component.

---

## 🚀 Features

* Class-based React component
* State update using button click
* Understanding `componentDidUpdate()`
* Controlling re-render using `shouldComponentUpdate()`

---

## 🧠 Concepts Used

### 1. componentDidUpdate()

This lifecycle method runs **after the component updates** (when state or props change).

---

### 🔥 When does it run?

* After state changes
* After props change
* Runs only if component re-renders

---

### 📌 Common Uses

* API calls after update
* Performing actions based on state change
* Syncing data

---

## ⚙️ shouldComponentUpdate()

This method controls whether the component should re-render or not.

---

### 🔍 Behavior in This Project

* `shouldComponentUpdate()` returns **false**
* This prevents the component from re-rendering
* As a result:

  * UI does NOT update
  * `componentDidUpdate()` does NOT run

---

## 🎯 Key Understanding

* `componentDidUpdate()` only runs if re-render happens
* `shouldComponentUpdate()` can block updates
* React lifecycle is controlled and predictable

---

## ⚠️ Important Notes

* Returning `false` stops rendering completely
* Use carefully to avoid UI not updating
* Useful for performance optimization

---

## 🎯 Learning Outcome

* Understand updating phase in React lifecycle
* Learn difference between update control and update execution
* Understand how React decides to re-render

---

## 👨‍💻 Author

**Rutwik Patil**
