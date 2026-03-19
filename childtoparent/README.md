# React Child to Parent Communication Example

This project demonstrates how to send data from a **child component to a parent component** in React using callback functions.

## 📌 Overview

In React, data usually flows from **parent to child** via props.
But sometimes, we need to send data **from child to parent** — this is done using a **callback function**.

## ⚙️ How It Works

* The parent component (`App.js`) defines a function.
* This function is passed to the child component (`User.js`) as a prop.
* The child calls this function and sends data back to the parent.

## 🧠 Example Explanation

### Parent Component (`App.js`)

```js
function alertParent(data) {
  alert(data);
}

<User alert={alertParent}></User>
```

* A function `alertParent` is created.
* It is passed to the child as a prop named `alert`.

### Child Component (`User.js`)

```js
props.alert("Hello from Child");
```

* The child calls the function received via props.
* Data ("Hello from Child") is sent to the parent.

## 🔁 Flow Summary

1. Parent creates function
2. Parent passes function as prop
3. Child calls function
4. Parent receives data

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
 ├── User.js
 ├── App.css
 └── logo.svg
```

## ✍️ Author

Rutwik Patil
