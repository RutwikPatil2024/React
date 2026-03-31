# React Router Dynamic User Page

This project demonstrates basic routing in React using `react-router-dom`, including dynamic URL parameters.

## 📌 Features

* Navigation using `Link`
* Dynamic routing with URL parameters
* Display user-specific content based on route

## 📂 Project Structure

* **App.js** → Sets up routing
* **Navigator.js** → Provides navigation links
* **User.js** → Displays dynamic user data

## ⚙️ How It Works

* The route `/user/:name` captures the `name` parameter from the URL.
* `useParams()` is used to access this parameter inside the `User` component.
* The value is displayed dynamically on the page.

## 🧪 Example

* `/user/anil` → Displays: *This is anil Page*
* `/user/Peter` → Displays: *This is Peter Page*

## 🛠️ Technologies Used

* React
* react-router-dom

## 👤 Author

Rutwik Patil
