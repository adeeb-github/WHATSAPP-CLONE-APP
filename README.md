# 📱 WhatsApp Web Clone App
A WhatsApp Web Clone built using MERN Stack with real-time chat features, WebSockets, and MongoDB.
It processes WhatsApp webhook JSON payloads, stores messages in MongoDB, and displays them in a chat UI.
---

## 🚀 Features
- **Webhook Payload Processing** – Reads `.json` webhook data from the `data/` folder.
- **User Management** – Automatically creates new users from WhatsApp contacts.
- **Message Handling** – Stores new messages and updates their statuses (`sent`, `delivered`, `read`).
- **MongoDB Integration** – Uses Mongoose models for `users` and `messages` collections.
- **CORS Support** – Configurable for frontend integration.
- **REST API Endpoints** – To fetch and manage users/messages.

---

## 🛠 Tech Stack
Frontend

React

Tailwind CSS

Axios

Socket.io Client

Backend

Node.js

Express.js

MongoDB + Mongoose

Socket.io

dotenv, cors


---

## 📂 Project Structure

backend/
│── config/
│ └── db.js # MongoDB connection
│── models/
│ ├── user.js # User schema
│ └── message.js # Message schema
│── routes/
│ └── userRoute.js # API routes
│── utils/
│ └── processWebhook.js # Webhook payload processing logic
│── data/ # Incoming webhook JSON payloads
│── index.js # App entry point
│── package.json
│── .env


## ⚙️ Installation & Setup

### 1️ Clone the repository

git clone https://github.com/adeeb-github/WHATSAPP-CLONE-APP.git
cd WHATSAPP-CLONE-APP
### 2 Install dependencies

npm install

### 3 Run the server

npm start
### 4 API Endpoints

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| GET    | `/api/users`           | Get all users           |
| GET    | `/api/messages/:wa_id` | Get messages for a user |
| POST   | `/api/messages`        | Create a new message    |

### 5 Webhook Data Processing

Place your .json payloads inside the data/ folder.

On server startup, processWebhookData() will:

Read each .json file.

Create or update users.

Insert/update messages with their latest statuses.

Messages are stored in the messages collection (or processed_messages if renamed).

### 6 CORS Setup

app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));

###  Future Improvements

Real-time updates via WebSockets

User authentication

Search and filtering

Frontend UI with React





