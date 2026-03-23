# 🔐 React Login Attempt Control (Lifecycle Example)

This project demonstrates how to control user actions using the **`shouldComponentUpdate()`** lifecycle method in a React class component.

---

## 🚀 Features

* Class-based React component
* Login attempt counter
* Restrict user after limited attempts
* Use of `shouldComponentUpdate()` for control
* Simple login UI

---

## 🧠 Concept Used

### 🔄 shouldComponentUpdate()

This lifecycle method is used to decide whether a component should re-render or not.

---

## 🔥 Behavior in This Project

* User has limited login attempts (5 attempts)
* Each button click decreases the attempt count
* When attempts reach **0 or less**:

  * Alert message is shown
  * Component stops updating
  * UI no longer re-renders

---

## 🎯 Key Understanding

* `shouldComponentUpdate()` can **block rendering**
* Useful for:

  * Preventing unnecessary updates
  * Adding restrictions (like login limits)
* React lifecycle gives control over component behavior

---

## ⚠️ Important Notes

* Returning `false` stops UI updates completely
* Use carefully, otherwise UI may freeze
* Good for performance optimization and control logic

---

## 📌 Real Flow

* User clicks login button
* Attempt count decreases
* Component checks condition
* If limit reached → update stops + alert shown

---

## 🎯 Learning Outcome

* Understand how to control rendering in React
* Learn practical use of lifecycle methods
* Implement real-world logic like login attempt limits

---

## 👨‍💻 Author

**Rutwik Patil**
