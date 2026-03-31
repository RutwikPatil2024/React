# 🧭 React useNavigate Routing Example

This project demonstrates how to perform **programmatic navigation** in React using the `useNavigate` hook from **React Router DOM**.

---

## 🚀 Features

* Client-side routing using React Router
* Navigation using `useNavigate()` hook
* Switching between multiple pages (Home & About)
* Button-based navigation (no links)
* Dynamic route handling

---

## 🧠 Concept: useNavigate()

`useNavigate()` is a React Router hook used to **navigate between routes programmatically**.

---

## 🔥 How it works

* `useNavigate()` returns a function
* This function is used to change routes
* Navigation happens without page reload

---

## 📌 Behavior in This Project

* Clicking **About** button → navigates to `/about`
* Clicking **Home** button → navigates to `/home`
* URL changes dynamically
* Corresponding component is rendered

---

## ⚠️ Important Notes

* `useNavigate()` must be used inside a Router
* Navigation is handled without refreshing the page
* Only one `<BrowserRouter>` should be used in the app

---

## 📂 Project Structure

```
src/
│── App.js
│── components/
│   │── Home.js
│   │── About.js
```

---

## 🎯 Learning Outcome

* Understand programmatic navigation in React
* Learn how to switch routes using code
* Understand React Router basics

---

## 👨‍💻 Author

**Rutwik Patil**
