# 🧙 Backend Wizards — Stage 0 Task  
**Dynamic Profile Endpoint**

Welcome to my Stage 0 Backend Wizards task!  
This project implements a simple **RESTful API** built with **Node.js and Express**, which returns my profile information and a dynamic cat fact fetched from the **Cat Facts API** 🐱.

---

## 🚀 Features

✅ `/me` endpoint that returns:
- Personal info (email, name, stack)
- Current UTC timestamp in ISO 8601 format
- Random cat fact from the [Cat Facts API](https://catfact.ninja/fact)
- Status field confirming success  

✅ Automatically updates timestamp and cat fact per request  
✅ Handles external API errors gracefully  
✅ Uses environment variables for configuration  
✅ Logs HTTP requests with Morgan middleware  
✅ Auto-restarts on file changes using Nodemon  

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|----------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web framework for building APIs |
| **Axios** | HTTP client to fetch cat facts |
| **Morgan** | Request logging middleware |
| **Dotenv** | Environment variable management |
| **Nodemon** | Auto-restarts server during development |

---

## 📂 Project Structure

```

backend-wizards-stage0/
│
├── server.js           # Main server file
├── package.json        # Project metadata and dependencies
├── .env                # Environment variables
├── .gitignore          # Files/folders to ignore in Git
└── README.md           # Project documentation

````

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally 👇

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/backend-wizards-stage0.git
cd backend-wizards-stage0
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create an `.env` file

```bash
PORT=3000
CATFACT_API=https://catfact.ninja/fact
CATFACT_TIMEOUT_MS=2000
```

### 4️⃣ Run the server (development mode)

```bash
nodemon server.js
```

Or for production:

```bash
node server.js
```

---

## 🧪 Testing the API

Once the server is running, open your browser or use **curl** or **Postman** to test:

### Endpoint:

```
GET http://localhost:3000/me
```

### Example Response:

```json
{
  "status": "success",
  "user": {
    "email": "[Your Email]",
    "name": "[Your Full Name Here]",
    "stack": "[Your Stack]"
  },
  "timestamp": "2025-10-18T15:05:56.179Z",
  "fact": "A cat will tremble or shiver when it is in extreme pain."
}
```

---

## 🧰 Environment Variables

| Variable             | Description                         | Default                                                  |
| -------------------- | ----------------------------------- | -------------------------------------------------------- |
| `PORT`               | Port where the server runs          | 3000                                                     |
| `CATFACT_API`        | External API endpoint for cat facts | [https://catfact.ninja/fact](https://catfact.ninja/fact) |
| `CATFACT_TIMEOUT_MS` | Timeout for API request (in ms)     | 5000                                                     |

---

## 🪵 Logging

This project uses **Morgan** to log HTTP requests in development mode.
Example output in your terminal:

```
GET /me 200 845.222 ms - 245
```

---

## 🚧 Error Handling

If the Cat Facts API fails (e.g., network issues or downtime),
the app returns this fallback message:

```json
"fact": "Could not fetch a cat fact at the moment."
```

---

## 🧠 What I Learned

Through this project, I learned:

* How to build and structure a simple REST API with Express
* How to fetch and integrate data from a third-party API
* How to handle API errors gracefully
* How to log requests and debug APIs like a professional backend developer
* The importance of clear documentation and environment configuration

---

## 🪄 Author

👤 **Name:** David[David Ojeifo]
📧 **Email:** [officialdave59@outlook.com](mailto:officialdave59@outlook.com)
🧰 **Stack:** Node.js / Express
📦 **GitHub:** [@Oje04](https://github.com/Oje04)

---

## 🌐 Deployment (if applicable)

If deployed (on Railway, Heroku, or AWS), the live endpoint will be accessible at:

```
https://your-deployed-url/me
```

---

## 🏁 Submission Checklist

✅ `/me` endpoint working
✅ JSON structure correct
✅ Dynamic timestamp and cat fact
✅ Hosted and publicly accessible
✅ README with setup instructions
✅ Blog post written (LinkedIn / Dev.to / Hashnode / Medium / X)

---

## 🐾 License

This project is open-source and available under the **MIT License**.

````