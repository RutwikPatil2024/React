# 🧭 React Nested Routing Example

This project demonstrates how to implement **nested routing** in React using **React Router DOM**.

---

## 🚀 Features

* Client-side routing with React Router
* Nested routes (child routes inside parent route)
* Multiple pages (Home, About, Login, Register)
* Sub-routes under About (Services, Buy, Connect)
* Clean route structure

---

## 📂 Project Structure

```
src/
│── App.js
│── components/
│   │── Home.js
│   │── About.js
│   │── Services.js
│   │── Buy.js
│   │── Connect.js
│   │── Login.js
│   │── Register.js
```

---

## 🧠 Concepts Used

### 1. BrowserRouter

Wraps the entire application and enables routing.

---

### 2. Routes & Route

* `Routes` holds all route definitions
* `Route` maps paths to components

---

### 3. Nested Routing

Nested routing allows rendering **child components inside a parent component**.

Example:

* `/about/services`
* `/about/buy`
* `/about/connect`

---

## 🔥 How it works

* `/about` loads the About component
* Inside About, nested routes are rendered
* Child routes are displayed using `Outlet` (inside About component)

---

## 📌 Behavior in This Project

* `/` → Home page
* `/login` → Login page
* `/register` → Register page
* `/about` → About page

  * `/about/services` → Services page
  * `/about/buy` → Buy page
  * `/about/connect` → Connect page

---

## ⚠️ Important Notes

* Nested routes require `<Outlet />` in parent component
* Child routes should not start with `/`
* Only one `<BrowserRouter>` should be used

---

## 🎯 Learning Outcome

* Understand nested routing in React
* Learn how parent-child routes work
* Use `Outlet` for rendering nested components

---

## 👨‍💻 Author

**Rutwik Patil**
