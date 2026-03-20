# 🔁 React Reusable Component Example

This is a simple React project demonstrating how to reuse a component multiple times using `.map()`.

---

## 🚀 Features

* Reusable React component (`User`)
* Rendering list using `.map()`
* Passing props to components
* Displaying duplicate components intentionally for practice

---

## 📂 Project Structure

```
src/
│── App.js
│── User.js
│── App.css
│── logo.svg
```

---

## 🧠 Concept Used

### 1. Reusable Components

Instead of writing the same UI multiple times, we create a component (`User.js`) and reuse it.

### 2. Mapping Data

We use `.map()` to loop through an array and render components dynamically.

---

## 💻 Code Example

### App.js

```jsx
import logo from "./logo.svg";
import "./App.css";
import User from "./User.js";

function App() {
  const users = [
    { name: "Rutwik", address: "Sangli" },
    { name: "Ram", address: "Kolhapur" },
    { name: "Shyam", address: "Pune" },
    { name: "Raju", address: "Satara" },
    { name: "Chimu", address: "Islampur" },
  ];

  return (
    <div className="App">
      <h1>Reuse Component</h1>
      {
        users.map((item, index) => {
          return (
            <>
              <User data={item} />
              <User data={item} />
            </>
          );
        })
      }
    </div>
  );
}

export default App;
```

---

## ⚠️ Important Notes

* Always use `key` when rendering lists in React:

```jsx
<User data={item} key={index} />
```

* Avoid using fragments (`<> </>`) without keys inside `.map()`:

```jsx
<React.Fragment key={index}>
```

---

## ▶️ How to Run

1. Install dependencies:

```
npm install
```

2. Start the project:

```
npm start
```

3. Open in browser:

```
http://localhost:3000
```

---

## 🎯 Learning Outcome

* Understand how to reuse components
* Learn how `.map()` works in React
* Practice props passing

---

## 👨‍💻 Author

**Rutwik Patil**
