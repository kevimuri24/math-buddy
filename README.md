# 🧮 React Math Router App

A simple React application to practice routing using `react-router-dom`. The app features a sidebar with three mathematical operations: **Addition**, **Subtraction**, and **Multiplication**. Users can input two numbers and perform calculations, with results dynamically shown based on URL path parameters.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## 📖 Overview

The React Math Router App is designed to help developers practice routing in React using `react-router-dom`. The app allows users to perform basic mathematical operations by navigating to different routes that include the operation type and the numbers involved in the calculation.

## ✨ Features

- **Dynamic Routing**: Uses path parameters to perform operations and display results.
- **Sidebar Navigation**: Easy navigation between different operations.
- **Interactive Form**: Users can input numbers and see results immediately after submitting the form.
- **Error Handling**: Basic handling for invalid routes.
- **Responsive Design**: Simple and responsive design for a better user experience.

## 🛠 Technologies

- **React**: Front-end library for building user interfaces.
- **React Router DOM**: Routing library for React.
- **JavaScript**: Programming language used for logic and functionality.

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. You can verify this by running:

```bash
node -v
npm -v
```

If not installed, download and install Node.js from [here](https://nodejs.org/).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/otsembo/math-buddy.git
   cd math-buddy
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the app**:

   ```bash
   npm start
   ```

   This will start the app on `http://localhost:3000`.

## 🎮 Usage

### Navigating the App

- **Sidebar**: Click on any operation (Addition, Subtraction, Multiplication) to start.
- **Input Form**: Enter two numbers and click "Calculate".
- **Result**: The result will be displayed along with the updated URL reflecting the operation and numbers.

### URL Paths

The app uses the following path structure for routing:

```plaintext
    TODO
```

You can also manually enter a URL to see the result for different numbers.

### Example URLs

- **Addition**: `/addition/5/3`
- **Subtraction**: `/subtraction/10/4`
- **Multiplication**: `/multiplication/7/6`

## 📂 Folder Structure

```plaintext
react-math-router-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── OperationForm.js
│   │   └── Result.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

## 📸 Screenshots

Here are some screenshots of the application:

 {/* TODO 1: Add a new route to open the operation form */}
           <Route  path="/:OperationForm" elementName={<OperationForm/>}/>
            {/* TODO 2: Add a new route that opens the Result page */}
            <Route  path="/:operations/:num1/:num2" elementName={<Result />}/>
            {/* TODO BONUS 1: Add a new route to  make the homepage default to navigating to the addition operation form  */}
            <Route path="/" element={<Navigate to="/addition" />} />
            {/* TODO BONUS 2: Add a custom Page Not Found error */}
            <Route path='*' element={<p><strong>404 Page Not Found</strong></p>} />
### 1. **Home Page (Addition Form)**

![Addition Form Screenshot](./addition.png)

### 2. **Result Page**

![Result Page Screenshot](./result.png)

## 🚀 Future Enhancements

- **Division Operation**: Add a division operation with error handling for division by zero.
- **Input Validation**: Improve validation for edge cases (e.g., negative numbers).
- **User Authentication**: Add user login and history tracking for personalized experience.
- **Styling**: Incorporate CSS frameworks like Tailwind CSS or Bootstrap for improved UI.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---