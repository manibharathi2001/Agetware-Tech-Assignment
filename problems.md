## Problem: User Management System for Bank Lending

A user management system is essential for managing customers and staff in a bank lending application. Your task is to build a simple RESTful API using Node.js and SQLite that performs the following operations:

### Requirements:

1. **POST /users** – Create a new user  
   - Accepts name, email, PAN number, mobile, and manager ID.
   - Validates:
     - PAN should be 10-character alphanumeric.
     - Mobile number should be exactly 10 digits.
     - Manager ID (if provided) must exist in the database.

2. **GET /users** – Retrieve all active users  
   - Excludes users who have been soft deleted.

3. **GET /users/:id** – Retrieve a single user by ID  
   - Shows user details if not deleted.

4. **PUT /users/:id** – Update user details  
   - Allows updating email, mobile, or manager ID.

5. **DELETE /users/:id** – Soft delete a user  
   - Sets `isDeleted` flag to `true`.

### Additional Guidelines:
- Use UUIDs as user IDs.
- Store data in SQLite.
- Use Express.js for routing.
- Ensure proper error handling and response codes.

---

### Evaluation Criteria:
- Correctness and completeness of all endpoints.
- Input validation.
- Use of appropriate status codes.
- Code modularity and readability.

---

## Sample Input for POST /users:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "pan": "ABCDE1234F",
  "mobile": "9876543210",
  "managerId": "e112bc32-...-5b72" 
}
