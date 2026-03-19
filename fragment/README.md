# React Fragment Example

This project demonstrates different ways to use **Fragments** in React.

## 📌 Overview

In React, a component must return a single parent element.
Fragments allow you to group multiple elements **without adding extra nodes to the DOM**.

This helps keep your HTML clean and avoids unnecessary `<div>` wrappers.

## ⚙️ Methods to Use Fragment

### ✅ Method 1: Short Syntax

```js
<>
  <h2>Ram</h2>
  <h2>Shyam</h2>
  <h2>Raju</h2>
</>
```

* Most commonly used
* Clean and simple
* No need to import anything

---

### ✅ Method 2: Using Fragment Import

```js
import { Fragment } from "react";

<Fragment>
  <h2>Ram</h2>
  <h2>Shyam</h2>
  <h2>Raju</h2>
</Fragment>
```

* Useful when you need to explicitly use Fragment

---

### ✅ Method 3: Using React.Fragment

```js
import React from "react";

<React.Fragment>
  <h2>Ram</h2>
  <h2>Shyam</h2>
  <h2>Raju</h2>
</React.Fragment>
```

* Same as Method 2
* More explicit syntax

---

## 🧠 Why Use Fragments?

* Avoid unnecessary `<div>` elements
* Keep DOM clean
* Improve performance slightly
* Useful when returning multiple elements

---

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

```bash
src/
 ├── User.js
 ├── App.js
 ├── App.css
```

## ✍️ Author

Rutwik Patil
