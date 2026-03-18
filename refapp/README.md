# React Ref Example 🚀

This project demonstrates how to use **Refs in React (Class Components)** to directly access and manipulate DOM elements.

---

## 📌 What this project shows

* Creating a ref using `createRef()`
* Attaching ref to an input field
* Setting default value using `componentDidMount()`
* Accessing input value using `.current.value`
* Modifying DOM styles using `.current.style`

---

## 🧠 Concept Used

### 🔹 Ref in React

A **ref** is used to directly access a DOM element without using `document.getElementById`.

Example:

```js
this.inputRef = createRef();
```

---

## ⚙️ How it works

1. A ref is created using `createRef()`
2. It is attached to the input field:

```js
<input ref={this.inputRef} />
```

3. After component loads:

```js
this.inputRef.current.value = "10000";
```

👉 Input box gets default value

4. On button click:

```js
this.inputRef.current.style.color = 'Red';
```

👉 Text color changes to red

---

## 📂 Project Structure

```
src/
 ├── App.js
 ├── App.css
 └── index.js
```

---

## ▶️ How to run the project

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm start
```

3. Open browser:

```
http://localhost:3000
```

---

## 🎯 Output

* Input box initially shows **10000**
* On clicking button:

  * Input text color changes to **Red**

---

## 🔥 Key Learnings

* `ref.current` gives access to DOM element
* `.value` → gets/sets input value
* `.style` → modifies element styling
* Avoid direct DOM manipulation unless necessary

---

## ⚠️ Note

This example uses **Class Components**.
In modern React, **useRef (functional components)** is preferred.

---

## 📌 Author

Rutwik Patil
