# 🌐 React Router Navigation Example

This project demonstrates how to implement **routing and navigation** in React using **React Router DOM**.

---

## 🚀 Features

* Client-side routing using React Router
* Navigation using `Link`
* Multiple pages (Home, About)
* 404 Error page handling
* Reusable navigation component

---

## 📂 Project Structure

```
src/
│── App.js
│── components/
│   │── Home.js
│   │── About.js
│   │── Error.js
│   │── Navigator.js
```

---

## 🧠 Concepts Used

### 1. BrowserRouter

Wraps the entire application and enables routing.

---

### 2. Routes & Route

* `Routes` contains all route definitions
* Each `Route` maps a path to a component

---

### 3. Navigation with Link

* `Link` is used instead of `<a>` tag
* Prevents page reload
* Enables smooth navigation

---

### 4. 404 Page Handling

* `/*` route catches all undefined paths
* Displays error page when route not found

---

## 🔥 How it works

* Application is wrapped with routing system
* Navigation links allow switching pages
* URL changes without refreshing page
* Unknown routes show error page

---

## 📌 Behavior in This Project

* `/` → Home page
* `/about` → About page
* Any invalid route → Error 404 page

---

## ⚠️ Important Notes

* Use `Link` instead of `<a>` for navigation
* Ensure correct route paths
* 404 route should be defined last

---

## 🎯 Learning Outcome

* Understand client-side routing in React
* Learn navigation between pages
* Handle invalid routes with error page

---

## 👨‍💻 Author

**Rutwik Patil**
