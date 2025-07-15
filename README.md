## 📰 React News App
A modern React-based news application that fetches the latest headlines using the NewsAPI.org. It features category-based browsing, infinite scrolling, and responsive routing using React Router.

---

## 📌 Features
🗂️ Browse news by category

🔁 Infinite scrolling for continuous news feed

🔎 Fetches live news from NewsAPI.org

🌐 Routing with React Router v7

⚛️ Built with React 19

📦 Clean project structure using functional components

---

## 📁 Folder Structure
```
newsapp/
├── public/
├── src/
│   ├── components/
│   │   └── News.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Clone the Repository
git clone https://github.com/your-username/newsapp.git

cd newsapp

---

### 2. Install dependencies
npm install

---

### 3. Add your API Key
Edit your .env file (create if not exists):

https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5b86a9d77d4cf0977d7f60513d5423&page=${this.state.page}&pageSize=${this.props.pageSize}







