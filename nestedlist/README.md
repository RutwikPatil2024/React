# 📊 React Bootstrap Table Example

This project demonstrates how to create a responsive and styled table in React using **React Bootstrap**.

---

## 🚀 Features

* Responsive table using React Bootstrap
* Dark themed table (`variant="dark"`)
* Striped and bordered design
* Hover effect on rows
* Dynamic data rendering using `.map()`
* Serial number generation

---

## 📂 Project Structure

```
src/
│── App.js
│── App.css
│── logo.svg
```

---

## 🧠 Concepts Used

### 1. React Bootstrap

Used to quickly style components like tables without writing custom CSS.

### 2. Mapping Data

Rendering table rows dynamically using `.map()`.

### 3. Props & JSX

Displaying dynamic values inside JSX using `{}`.

---

## 💻 Code Example

### App.js

```jsx
import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap';

function App() {
  const users = [
    { name: "Rutwik", email: "abc@gmail.com", address: "Sangli" },
    { name: "Ram", email: "ram@gmail.com", address: "Kolhapur" },
    { name: "Shyam", email: "shyam@gmail.com", address: "Satara" },
    { name: "Jacob", email: "jacob@gmail.com", address: "Islampur" },
  ];

  return (
    <div className="App">
      <Table striped bordered variant="dark" hover responsive>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
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

### 2. Install React Bootstrap

```
npm install react-bootstrap bootstrap
```

### 3. Import Bootstrap CSS (important)

Add this in `index.js` or `App.js`:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
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

* Learn how to use React Bootstrap
* Understand table structure in React
* Practice rendering dynamic lists
* Improve UI with minimal CSS

---

## 👨‍💻 Author

**Rutwik Patil**
