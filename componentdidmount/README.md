# 🔄 React componentDidMount Lifecycle Example

This project demonstrates the use of the **`componentDidMount()`** lifecycle method in a React class component.

---

## 🚀 Features

* Class-based React component
* Understanding `componentDidMount()` lifecycle method
* Logging when component mounts
* Basic UI rendering

---

## 🧠 Concept: componentDidMount()

`componentDidMount()` is a lifecycle method that runs **once after the component is rendered on the screen**.

---

## 🔥 When does it run?

* After the component is created and added to the DOM
* Runs only **once** in the component lifecycle

---

## 📌 Common Uses

* API calls (fetch data from server)
* Setting up timers (`setTimeout`, `setInterval`)
* Accessing DOM elements
* Initializing third-party libraries

---

## 🎯 Key Understanding

* It runs **after render**, not before
* It is part of the **mounting phase**
* Safe place to perform side effects

---

## ⚠️ Important Notes

* Do not use it for rendering UI directly
* Avoid heavy computations that may slow down the app
* Use cleanup methods (like `componentWillUnmount`) if needed

---

## 🎯 Learning Outcome

* Understand mounting phase in React
* Learn when and why `componentDidMount()` is used
* Understand side effects in React

---

## 👨‍💻 Author

**Rutwik Patil**
