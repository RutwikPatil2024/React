# 🔄 React Render Lifecycle Example

This project demonstrates how the **`render()` method** works in React class components as part of the **lifecycle methods**.

---

## 🚀 Features

* Understanding `render()` lifecycle method
* Re-rendering on state change
* Re-rendering on props change
* Parent → Child communication using props

---

## 🧠 Concept: render() in React

The `render()` method is a core lifecycle method in React class components.

It is responsible for:

* Displaying UI
* Updating UI when data changes

---

## 🔥 When does `render()` get called?

### 1. 🟢 When component is created (Mounting)

* The component is loaded for the first time
* `render()` runs to display UI

---

### 2. 🟡 When state changes

* When `setState()` is called
* React updates the UI
* `render()` runs again

---

### 3. 🔵 When props change

* When parent component updates data
* New props are passed to child
* Child component re-renders

---

## 🎯 Key Understanding

* React automatically re-renders when **state or props change**
* No need to manually call `render()`
* Helps keep UI in sync with data

---

## 📌 Real Flow in This Project

* A button updates the state in parent component
* Updated state is passed as props to child component
* Props change triggers re-render
* UI updates automatically

---

## ⚠️ Important Notes

* Avoid unnecessary state updates to prevent extra renders
* React efficiently updates only the changed parts of the UI

---

## 🎯 Learning Outcome

* Understand how `render()` works in lifecycle
* Learn when React re-renders components
* Understand relationship between state and props

---

## 👨‍💻 Author

**Rutwik Patil**
