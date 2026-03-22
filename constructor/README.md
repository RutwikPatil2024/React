# 🔄 React Constructor Lifecycle Example

This project demonstrates the use of the **constructor** in a React class component, which is part of the **lifecycle methods (Mounting Phase)**.

---

## 🚀 Features

* Class-based React component
* Using `constructor()` lifecycle method
* State initialization
* Rendering dynamic data

---

## 📂 Project Structure

```
src/
│── App.js
│── App.css
│── index.js
```

---

## 🧠 Concept: Constructor in React

The `constructor()` is the **first method** that runs when a class component is created.

### 📌 Purpose of Constructor:

* Initialize state
* Bind methods (if needed)

---

### ✅ Syntax

```jsx
constructor() {
  super();
  this.state = {
    name: "Anil",
  };
}
```

---

### ⚠️ Important Points

* Must call `super()` before using `this`
* Used only in class components
* Runs only **once** when component is created

---

## 💻 Code Example

### App.js

```jsx
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Anil",
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
```

---

## ⚙️ Installation & Setup

### 1. Install dependencies

```
npm install
```

---

## ▶️ Run the Project

```
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## 🎯 Learning Outcome

* Understand constructor in React lifecycle
* Learn how state is initialized
* Understand role of `super()`

---

## 👨‍💻 Author

**Rutwik Patil**
