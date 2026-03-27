# ⚛️ React Router Basic Example

## 📌 Overview

This project demonstrates basic routing in React using **React Router DOM**.
It allows navigation between different pages without reloading the browser.

---

## 🚀 Features

* Client-side routing using React Router
* Navigation between Home and About pages
* Clean and simple structure
* Beginner-friendly example

---

## 🧠 Concepts Used

### 🔹 React Router

React Router is used to handle navigation in React applications without refreshing the page.

### 🔹 Components

* **Home Component** → Displayed at `/`
* **About Component** → Displayed at `/about`

---

## 🧾 Code Explanation

### 📍 Importing Router

```javascript id="x1b8dl"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

---

### 📍 Defining Routes

```jsx id="q2n5ys"
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
  </Routes>
</BrowserRouter>
```

* `/` → Home Page
* `/about` → About Page

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Home.js
│   ├── About.js
│── App.js
```

---

## ▶️ How to Run

1. Create React app:

```bash id="c5jv7p"
npx create-react-app my-app
```

2. Install React Router:

```bash id="3l2fpk"
npm install react-router-dom
```

3. Replace `App.js` and add components

4. Run the app:

```bash id="rz5g6n"
npm start
```

---

## 📊 Output

* Visiting `/` → Shows Home page
* Visiting `/about` → Shows About page
* No page reload during navigation

---

## 🎯 Purpose

* Learn React Router basics
* Understand client-side routing
* Build multi-page React apps

---

## 🚀 Future Improvements

* Add navigation bar (Navbar)
* Add more routes (Contact, Services)
* Implement dynamic routing

---

## 👨‍💻 Author

Rutwik Patil
