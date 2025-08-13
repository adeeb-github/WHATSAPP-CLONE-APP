# 📱 WhatsApp Web Clone (Backend)

A **WhatsApp Web-like chat interface** that displays **real-time conversations** using **webhook data**.  
The backend is built with **Node.js, Express, MongoDB, and Mongoose**, and processes incoming **WhatsApp Webhook payloads** to store and update chats.

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
- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB + Mongoose** – Database & ODM
- **dotenv** – Environment variable management
- **CORS** – Cross-Origin Resource Sharing
- **fs / path** – File system utilities

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

### 1️⃣ Clone the repository

git clone https://github.com/your-username/whatsapp-web-clone-backend.git
cd whatsapp-web-clone-backend

### Install dependencies

npm install

### Run the server

npm start
### API Endpoints

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| GET    | `/api/users`           | Get all users           |
| GET    | `/api/messages/:wa_id` | Get messages for a user |
| POST   | `/api/messages`        | Create a new message    |

### Webhook Data Processing

Place your .json payloads inside the data/ folder.

On server startup, processWebhookData() will:

Read each .json file.

Create or update users.

Insert/update messages with their latest statuses.

Messages are stored in the messages collection (or processed_messages if renamed).

### CORS Setup

app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));

### Future Improvements

Real-time updates via WebSockets

User authentication

Search and filtering

Frontend UI with React





