# 🔍 React useRef Example

This project demonstrates how to use the **`useRef` hook** in React to directly access and manipulate DOM elements.

---

## 🚀 Features

* Use of `useRef` to access input field
* Programmatically set input value
* Automatically focus input field
* Simple and beginner-friendly example

---

## 📂 Project Structure

```
src/
 ├── App.js
 ├── App.css
 ├── logo.svg
```

---

## 🧠 What is useRef?

`useRef` is a React hook that allows you to:

* Access DOM elements directly
* Persist values without re-rendering the component

---

## 💡 How It Works

* A reference (`inputref`) is created using `useRef`
* The `ref` is attached to the input field
* On button click:

  * Input value is set to `"12345"`
  * Input field gets focus
  * Message is logged in console

---

## 🧾 Code Example

```javascript
import { useRef } from 'react';

function App() {
  let inputref = useRef(null);

  function handleInput() {
    inputref.current.value = "12345";
    inputref.current.focus();
    console.log("value set successfully");
  }

  return (
    <div className="App">
      <h2>Using useRef in React</h2>
      <input type='text' ref={inputref}></input>
      <button onClick={handleInput}>setValue</button>
    </div>
  );
}

export default App;
```

---

## ▶️ How to Run

1. Install dependencies:

```
npm install
```

2. Start the app:

```
npm start
```

---

## 🎯 Output

* Click the **SetValue** button
* Input field will:

  * Get value `"12345"`
  * Automatically focus

---

## 📚 Learning Outcome

* Understanding `useRef`
* Direct DOM manipulation in React
* Handling input programmatically

---

## 👨‍💻 Author

**Rutwik Patil**

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
