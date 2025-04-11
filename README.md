# 📚 Study Buddy Backend

This is the backend API for the **Study Buddy Platform** — a collaborative learning tool where students can:
- Create and share study notes ✍️
- Get matched with compatible study buddies 🤝
- Schedule sessions 🗓️
- Track shared to-do tasks ✅

Built with **Node.js**, **Express.js**, and **MongoDB**.

---

## 🚀 Getting Started

### 🧱 Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB
- [Git](https://git-scm.com/)

### 📦 Installation
```bash
git clone https://github.com/pushyamithra237/study-buddy-backend.git
cd study-buddy-backend
npm install
```

### 🔐 Create a `.env` file
```
DATABASE_URI=mongodb+srv://your_username:your_password@your-cluster.mongodb.net/StudyBuddyDB
```

### ▶️ Run the Server
```bash
npx nodemon server.js
```
Server will run at `http://localhost:3500`

---

## 📂 Project Structure
```
├── controllers       # Route logic
├── models            # Mongoose schemas
├── routes            # API endpoints
├── config            # DB connection
├── middleware        # Logging and security helpers
├── data              # Local data (optional)
├── public            # Static files (HTML if needed)
└── server.js         # Main backend entry point
```

---

## 🔌 API Endpoints

### 🧑‍💻 Auth
- `POST /register` – Register a new user
- `POST /login` – Login user

### 📝 Notes
- `GET /notes` – Get notes for a user
- `POST /notes` – Add a new note

### 🤝 Matching
- `GET /match-buddies?user=username` – Match users by shared study topics

### 🗓️ Sessions
- `GET /sessions?user=username` – Get all scheduled sessions for a user
- `POST /sessions` – Create a new session

### ✅ Shared To-Do
- `GET /todos?user=username` – Get all tasks for a user or topic
- `POST /todos` – Create a new task
- `PUT /todos/:id` – Update a task
- `DELETE /todos/:id` – Delete a task

---

## 👥 Contributors
- **Pushya Mithra** – Backend Dev
- **Team Members** – Frontend, JWT, Messaging

---

## 💡 Final Notes
- Frontend team can connect via `http://localhost:3500`


---

Happy Coding! 💙

