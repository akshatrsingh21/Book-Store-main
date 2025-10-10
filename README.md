# 📚 Book Store – Full Stack MERN Application


The **Book Store App** is a full-stack web application that allows users to **register**, **login**, and manage their personal book collections. Built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), this project demonstrates modern web development concepts including **authentication**, **CRUD operations**, **RESTful APIs**.

---


## ✨ Key Features


-  **User Authentication** – Secure registration, login, and logout.

- **View Books** – Display books stored in a MongoDB database.

-  **Add Book** – Users can add new books with title, author, and genre.

-  **Delete Book** – Remove books from your collection.

-   **Search** – Easily find books.


---

## 🧾 Folder Structure
The folder structure of the project is as follows:

    Book-Store/
    │
    ├── frontend/           # React frontend
    │   ├── src/
    │   └── ...
    │
    ├── backend/            # Express backend
    │   ├── models/
    │   ├── routes/
    │   ├── controllers/
    │   └── server.js
    │
    └── README.md



## 🔐 User Authentication

-  Passwords are hashed securely using **bcrypt**

-  Login sessions are managed via **JWT tokens**

-  Access to book data is **protected** behind authentication

---

## 🛠️ Tech Stack

| Layer         | Technology Used                  |
|---------------|----------------------------------|
| Frontend      | `React.js`, `Axios`, `React Router` |
| Backend       | `Node.js`, `Express.js`, `JWT`, `bcrypt` |
| Database      | `MongoDB`, `Mongoose`            |
| API Type      | `RESTful API`                    |
| Dev Tools     | `VS Code`, `GitHub`   |

---

## 🚀 Getting Started


### 📁 Clone the Repository


    git clone https://github.com/RAK4307/Book-Store.git

    cd Book-Store

### ⚙️ Backend Setup

    cd backend

    npm install

Create a ```.env``` file in the ```backend/``` directory and add:

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key

Then run:

    npm start

The backend will run at  ``` http://localhost:5000 ```

### 💻 Frontend Setup

    cd frontend

    npm install

    npm run dev

The frontend will run at  ```http://localhost:5173```

## 👣 User Flow

Here’s how users interact with the system:

-  **Sign Up** – Create an account with name, email, and password.

-  **Log In** – Authenticate securely with JWT.

-  **Access Dashboard** – View, add, or delete books.

-  **Log Out** – Securely end the session.


## 📸 Screenshots

### 🏠 Home Page
![Screenshot 2025-04-20 211446](https://github.com/user-attachments/assets/e94f8db3-2c4d-425b-b3cb-23dd87266058)


---

### 📝 Registration Page

![Screenshot 2025-04-20 212631](https://github.com/user-attachments/assets/5cf45b82-81da-4f65-9aff-1cfe6b7a6697)

---

### 🔐 Login Page

![Screenshot 2025-04-20 212626](https://github.com/user-attachments/assets/ea2acfb4-a429-4494-a417-5d3279d1544f)

---

### 📚 Managing Page
![Screenshot 2025-04-20 212614](https://github.com/user-attachments/assets/499a57cc-323b-41ae-86f5-48a8cb7256e6)

---

### 🛒 Cart Page


![Screenshot 2025-04-20 211638](https://github.com/user-attachments/assets/08a93489-572e-4e6b-8aeb-a6801d534708)



##  🤝 Contributions

Contributions and feedback are welcome! Feel free to submit an issue or open a pull request.


## 📄 License
This project is licensed under the **MIT License**. See the ```LICENSE``` file for details.

## Contact me

📧 Email: kanil25566@gmail.com

🔗 GitHub: https://github.com/RAK4307

## Thank You for Visiting!




