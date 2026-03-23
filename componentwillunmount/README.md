# 🔄 React componentWillUnmount Lifecycle Example

This project demonstrates the use of the **`componentWillUnmount()`** lifecycle method in a React class component.

---

## 🚀 Features

* Class-based React component
* Conditional rendering using state
* Mounting and unmounting of components
* Understanding `componentWillUnmount()`

---

## 🧠 Concept: componentWillUnmount()

`componentWillUnmount()` is a lifecycle method that runs **just before a component is removed from the DOM**.

---

## 🔥 When does it run?

* When a component is removed (unmounted)
* When conditional rendering removes a component
* Runs only once before removal

---

## 📌 Behavior in This Project

* Initially, the **User component is displayed**
* Clicking the button toggles the state
* When state changes:

  * The **User component is removed**
  * `componentWillUnmount()` is triggered
  * A message is logged in the console

---

## 🎯 Key Understanding

* Unmounting happens when a component is no longer needed
* Lifecycle method helps perform cleanup before removal
* Useful for managing resources

---

## ⚠️ Common Use Cases

* Clearing timers (`setInterval`, `setTimeout`)
* Removing event listeners
* Cancelling API requests

---

## 📌 Real Flow

* Component renders → User is visible
* Button click → state changes
* User component removed
* `componentWillUnmount()` runs

---

## 🎯 Learning Outcome

* Understand unmounting phase in React
* Learn how cleanup works in components
* Understand conditional rendering impact on lifecycle

---

## 👨‍💻 Author

**Rutwik Patil**
