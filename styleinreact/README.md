# 🎨 React Styling Methods Example

This project demonstrates different ways to apply styles in React applications.

---

## 🚀 Features

* Apply styles using external CSS
* Use inline styling in React
* Use CSS Modules for scoped styling
* Clean and simple UI example

---

## 📂 Project Structure

```
src/
│── App.js
│── App.css
│── Style.css
│── custom.module.css
│── logo.svg
```

---

## 🧠 Concepts Used

### 1. External CSS

Using a normal CSS file (`Style.css`) and applying classes globally.

```css
.primary {
  color: blue;
}
```

```jsx
<h3 className="primary">Style1 in React</h3>
```

---

### 2. Inline Styling

Applying styles directly inside JSX using JavaScript objects.

```jsx
<h3 style={{ color: 'red', fontSize: 15 }}>
  Style2 in React
</h3>
```

---

### 3. CSS Modules

Using scoped CSS to avoid conflicts.

```css
/* custom.module.css */
.success {
  color: green;
}
```

```jsx
import style from './custom.module.css';

<h3 className={style.success}>Style3 in React</h3>
```

---

## 💻 Code Example

### App.js

```jsx
import logo from './logo.svg';
import './App.css';
import './Style.css';
import style from './custom.module.css';

function App() {
  return (
    <div className="App">
      <h2>Applying Style in CSS</h2>
      <h3 className='primary'>Style1 in React</h3>
      <h3 style={{ color: 'red', fontSize: 15 }}>Style2 in React</h3>
      <h3 className={style.success}>Style3 in React</h3>
    </div>
  );
}

export default App;
```

---

## ⚙️ Installation & Setup

### 1. Install dependencies

```
npm install
```

---

## ▶️ Run the Project

```
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## 🎯 Learning Outcome

* Understand different styling methods in React
* Learn when to use CSS Modules vs normal CSS
* Practice inline styling in JSX

---

## 👨‍💻 Author

**Rutwik Patil**
