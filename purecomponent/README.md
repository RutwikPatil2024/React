# React PureComponent Example

This project demonstrates the use of **PureComponent** in React and how it behaves with state updates.

## 📌 Overview

In React, `PureComponent` is similar to a normal component but with a key difference:

* It performs a **shallow comparison** of props and state.
* It only re-renders when there is an actual change in state or props.

## ⚙️ What This Code Shows

* A simple counter initialized to `0`
* A button that updates the state
* When using `PureComponent`, setting the same state value (like `count: 1` repeatedly) will **not trigger re-render again**

## 🧠 Key Concept

```js
this.setState({ count: 1 });
```

* If `count` is already `1`, React will NOT re-render the component.
* This is because `PureComponent` prevents unnecessary re-renders using shallow comparison.

## 🆚 Component vs PureComponent

| Feature         | Component         | PureComponent      |
| --------------- | ----------------- | ------------------ |
| Re-render check | Always re-renders | Shallow comparison |
| Performance     | Less optimized    | More optimized     |

## 🚀 How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm start
   ```

## 📂 Project Structure

```
src/
 ├── App.js
 ├── App.css
 └── logo.svg
```

## ✍️ Author

Rutwik Patil
