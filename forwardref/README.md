# 🔗 React forwardRef Example

This project demonstrates how to use **`forwardRef`** in React to directly access and control a child component’s DOM element from a parent component.

---

## 🚀 Features

* Functional React components
* Using `useRef()` hook
* Passing refs from parent to child
* Accessing and modifying DOM elements
* Focus and styling control via ref

---

## 🧠 Concept: forwardRef

`forwardRef` is used to **pass a ref from a parent component to a child component**.

Normally, refs cannot be directly applied to custom components.
`forwardRef` solves this problem by forwarding the ref to a DOM element inside the child.

---

## 🔥 How it works

* Parent creates a ref using `useRef()`
* Ref is passed to child component
* Child receives ref using `forwardRef`
* Ref is attached to a DOM element (like input)
* Parent can now control that element

---

## 📌 Behavior in This Project

* A ref is created for an input field
* The ref is passed to the child component
* Button click triggers:

  * Input value update
  * Input text color change
  * Input field gets focus

---

## 🎯 Key Understanding

* `useRef()` stores reference to DOM element
* `forwardRef` allows passing ref to child
* Enables direct DOM manipulation

---

## ⚠️ Important Notes

* `forwardRef` is required when using refs with functional components
* Avoid excessive DOM manipulation (use React state when possible)
* Useful for focus, animations, and integrations

---

## 📌 Common Use Cases

* Auto focus input fields
* Form handling
* Trigger animations
* Integrating with third-party libraries

---

## 🎯 Learning Outcome

* Understand how refs work in React
* Learn how to pass refs between components
* Gain control over child component DOM

---

## 👨‍💻 Author

**Rutwik Patil**
