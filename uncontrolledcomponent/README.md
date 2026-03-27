# ⚛️ React Uncontrolled Component Example

## 📌 Overview

This project demonstrates how to use **Uncontrolled Components in React** using the `useRef` hook.

Instead of storing input values in state, we directly access DOM elements using references.

---

## 🚀 Features

* Uses `useRef` to access input fields
* Handles form submission
* Displays entered name dynamically
* Simple and beginner-friendly example

---

## 🧠 Concept Used

### 🔹 Uncontrolled Component

An uncontrolled component is a form element where data is handled by the **DOM itself**, not by React state.

In this project:

* `useRef` is used to get input values
* No `useState` is used

---

## 🧾 Code Explanation

### 📍 Creating References

```javascript
const inputref1 = useRef(null);
const inputref2 = useRef(null);
```

---

### 📍 Handling Form Submission

```javascript
function onformsubmit(e) {
  e.preventDefault();
  let h1 = document.getElementById("one");
  h1.textContent = inputref1.current.value;
}
```

* Prevents page reload
* Reads input values using `ref`
* Updates UI

---

### 📍 Input Fields

```jsx
<input ref={inputref1} type="text" />
<input ref={inputref2} type="text" />
```

---

## ▶️ How to Run

1. Create a React app:

```bash
npx create-react-app my-app
```

2. Replace `App.js` with this code

3. Run the project:

```bash
npm start
```

---

## 📊 Output

* User enters name and email
* On submit:

  * Name is displayed on screen
  * Values are logged in console

---

## 🎯 Purpose

* Understand uncontrolled components
* Learn `useRef` hook
* Practice form handling in React

---

## ⚠️ Note

Using `document.getElementById` is **not recommended in React**.
Instead, you can use another `ref` or state for better practice.

---

## 👨‍💻 Author

Rutwik Patil
