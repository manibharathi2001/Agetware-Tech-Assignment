## 🏦 Bank Lending System (Node.js + SQLite)

### 💡 Overview

The **Bank Lending System** is a RESTful API service built using **Node.js** and **SQLite**, focusing on managing users, their basic KYC validation, and loan eligibility processes. It serves as a backend service that could be extended into a full-fledged lending platform.

---

### ✅ Features

* **User Creation**: Add new users with validations (PAN, mobile number, etc.)
* **Get All Users**: Fetch a list of users from the system.
* **Update User**: Modify user details.
* **Soft Delete**: Mark user as deleted without removing from the database.
* **Get Single User**: Retrieve individual user details using UUID.

---

### ⚙️ Technologies Used

* **Backend**: Node.js, Express.js
* **Database**: SQLite3
* **Validation**: Regex-based PAN & Mobile number checks
* **ID Management**: UUID for unique user identification
* **Tooling**: Postman for API testing

---

### 📄 API Endpoints

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| POST   | `/users`     | Create a new user     |
| GET    | `/users`     | Get all users         |
| GET    | `/users/:id` | Get single user by ID |
| PUT    | `/users/:id` | Update user details   |
| DELETE | `/users/:id` | Soft delete a user    |

---

### 🔒 Validations

* **PAN**: Must match the standard PAN format (e.g., `ABCDE1234F`)
* **Mobile Number**: Must be a valid 10-digit Indian mobile number
* **Manager ID**: Optional field, but if present, should refer to an existing user

---

### 🚀 Running the Project

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the server**

   ```bash
   node index.js
   ```

3. **Access API**

   * Server will run at: `http://localhost:5000`

4. **Test with Postman**

   * Use provided endpoints to create and manage users

---

### 📁 Project Structure

```
bank-lending-assignments/
├── index.js
├── db.js
├── routes/
│   └── users.js
├── models/
│   └── userModel.js
├── validations/
│   └── userValidation.js
└── README.md
```

---

### 🧪 Testing

* All endpoints can be tested using **Postman**.
* Make sure `Content-Type: application/json` is used in headers.

---

### 🧠 Design Decisions

* Used **soft delete** to preserve data integrity.
* SQLite was chosen for simplicity and zero-config setup.
* UUIDs provide better safety for referencing user entities in distributed systems.

---

### 📌 Notes

* Authentication is skipped as per assignment scope.
* You can easily extend the system with loan application and approval flows.
