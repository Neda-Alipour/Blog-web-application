# Blog-web-application
This is a Capstone Project for the "The Complete 2023 Web Development Bootcamp - Angela Yu" course. 

Project Description
The goal of this project is to create a Blog web application using Node.js, Express.js, and EJS. The application will allow users to create and view blog posts. Posts will not persist between sessions as no database will be used in this version of the application. Styling will be an important aspect of this project to ensure a good user experience.

Features
1. Post Creation: Users should be able to create new posts.

2. Post Viewing: The home page should allow the user to view all their posts.

3. Post Update/Delete: Users should be edit and delete posts as needed.

3. Styling: The application should be well-styled and responsive, ensuring a good user experience on both desktop and mobile devices

Technical Requirements
1. Node.js & Express.js: The application will be a web server built using Node.js and Express.js. Express.js will handle routing and middleware.

2. EJS: EJS will be used as the templating engine to generate dynamic HTML based on the application's state.

-----------------

# 💜 Blog Web Application

A minimalist yet elegant blog app built using **Node.js**, **Express**, **EJS**, and **Bootstrap 5** — featuring a soft purple-pink aesthetic, CRUD operations (Create, Read, Update, Delete), and interactive UX touches like modals and notifications.

---

## 🚀 Features
✅ Clean, responsive, minimalist UI with a pinkish-purple color palette  
✅ Create, edit, and delete posts   
✅ Auto-dismissing success alerts after actions  
✅ Creation timestamps on posts  
✅ Organized code using EJS partials and Bootstrap 5  

---

## 🧩 Tech Stack
| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Templating | EJS (Embedded JavaScript Templates) |
| Frontend | Bootstrap 5, Custom CSS |
| Utility | UUID (for unique post IDs) |

---

## 📂 Folder Structure
```

blog-app/
│
├── index.js                 # Express server and routes
├── package.json
│
├── views/                 # EJS templates
│   ├── partials/
│   │   ├── header.ejs     # Shared navbar + head
│   │   └── footer.ejs     # Shared footer + Bootstrap JS
│   ├── index.ejs          # Home page (shows all posts)
│   ├── new_post.ejs            # Create post page
│   └── edit_post.ejs           # Edit post page
│
└── public/
└── styles.css         # Custom Bootstrap overrides

````

---

## ⚙️ Setup & Run

1️⃣ **Install dependencies**
```bash
npm install express ejs uuid
npm install nodemon
````

2️⃣ **Run the server**

```bash
npm start/nodemon <filename>
```

3️⃣ **Open in your browser**

http://localhost:3000

---

## 💅 Design Language

* **Base colors:** soft lavender (`#b565f7`) & pink (`#e44cc4`)
* **Accent style:** gradient backgrounds, rounded corners, subtle shadows
* **Typography:** clean system font (`Segoe UI`, `system-ui`, `sans-serif`)

---

## 💾 Data Persistence

Currently, posts are stored **in-memory** (they reset when you restart).
You can easily extend it with:

* MongoDB (via `mongoose`)
* SQLite
* JSON file-based storage (simple persistence)

---

## 🔐 User Interactions

| Action        | Method | Description                                  |
| ------------- | ------ | -------------------------------------------- |
| `/`           | GET    | Home page, displays all posts (newest first) |
| `/new-post`        | GET    | Form to create a new post                    |
| `/new-post`        | POST   | Create post handler                          |
| `/edit/:id`   | GET    | Edit form                                    |
| `/edit/:id`   | POST   | Update post                                  |
| `/delete/:id` | POST   | Delete post (with modal confirmation)        |

---

## 🧠 Future Ideas

✨ Add persistent storage (MongoDB or SQLite)
✨ Add authentication (login/signup)
✨ Add comments per post
✨ Use Toasts or SweetAlert for notifications
✨ REST API + React frontend

---

## 👨‍💻 Credits

Built by **Neda Alipour** using 💜 Node, Express & EJS.
UI theme inspired by a soft purple gradient aesthetic.

---

## 🧾 License

This project is open-source and free to modify for learning and personal use.

---

## 🧾 **2. Cheat Sheet (Node.js + Express + EJS)**

### 🟩 Node.js Basics
| Concept | Description |
|----------|--------------|
| `require()` / `import` | Import modules |
| `module.exports` / `export` | Export functions |
| `process.env.PORT` | Access environment variables |
| `npm init` | Initialize a Node project |
| `npm install <pkg>` | Install dependencies |

---

### 🟦 Express.js Essentials
| Task | Code |
|------|------|
| Create app | `const app = express();` |
| Serve static files | `app.use(express.static('public'));` |
| Set view engine | `app.set('view engine', 'ejs');` |
| Parse forms | `app.use(express.urlencoded({ extended: true }));` |
| Define route | `app.get('/', (req, res) => res.render('index'));` |
| Redirect | `res.redirect('/path');` |
| Get URL param | `req.params.id` |
| Get form data | `req.body` |

---

### 🟨 EJS Tips
| Task | Example |
|------|----------|
| Embed JS | `<% code %>` |
| Output variable | `<%= variable %>` |
| Include partial | `<%- include('partials/header') %>` |
| Conditional | `<% if(posts.length > 0) { %> ... <% } %>` |
| Loop | `<% posts.forEach(post => { %> ... <% }) %>` |

---

### 🟪 Bootstrap Tips
| Feature | Example |
|----------|----------|
| Modal | Needs Bootstrap JS bundle |
| Dismiss alert | `<button data-bs-dismiss="alert">` |
| Gradient | `background: linear-gradient(90deg, #b565f7, #e44cc4);` |
| Flexbox | `.d-flex .justify-content-center .align-items-center` |
| Responsive padding/margin | `mt-4`, `mb-3`, `px-5` |

---

### 🟧 Project-Specific Gems
- **UUIDs** for unique post IDs  
  → `import { v4 as uuidv4 } from 'uuid';`
- **Created date** saved as `new Date()`
- **Modal-based delete confirmation**
- **Success alerts auto-dismiss + clean URL**
- **Sorting posts newest-first:**  

```js
  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
````

---

### 🧩 Good Practices Recap

✅ Use `partials/` for headers and footers
✅ Always sanitize/validate input before storing
✅ Keep UI minimal — use Bootstrap utilities
✅ Centralize routes in `index.js` or `/routes` folder
✅ Use query params or flash messages for alerts
✅ Always test modals and alerts after Bootstrap updates
