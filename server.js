const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// Initialize SQLite DB
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) return console.error(err.message);
    console.log('✅ Connected to SQLite database');
});

// Create users table if not exists
db.run(`CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    pan TEXT UNIQUE,
    mobile TEXT,
    manager_id TEXT,
    is_deleted INTEGER DEFAULT 0
)`);

/// ➕ Create User
app.post('/users', (req, res) => {
    const { name, email, pan, mobile, manager_id } = req.body;
    const id = uuidv4();

    const query = `INSERT INTO users (id, name, email, pan, mobile, manager_id) VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(query, [id, name, email, pan, mobile, manager_id], function (err) {
        if (err) return res.status(400).json({ error: err.message });
        res.status(201).json({ message: 'User created', id });
    });
});

/// 📥 Get All Users (excluding soft-deleted)
app.get('/users', (req, res) => {
    db.all(`SELECT * FROM users WHERE is_deleted = 0`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

/// 🔄 Update User
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, pan, mobile, manager_id } = req.body;

    const query = `
        UPDATE users SET name = ?, email = ?, pan = ?, mobile = ?, manager_id = ?
        WHERE id = ? AND is_deleted = 0`;

    db.run(query, [name, email, pan, mobile, manager_id, id], function (err) {
        if (err) return res.status(400).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ message: 'User not found or deleted' });
        res.json({ message: 'User updated' });
    });
});

/// ❌ Soft Delete User
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    db.run(`UPDATE users SET is_deleted = 1 WHERE id = ?`, [id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User soft deleted' });
    });
});

/// 🔍 Get Single User
app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    db.get(`SELECT * FROM users WHERE id = ? AND is_deleted = 0`, [id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ message: 'User not found' });
        res.json(row);
    });
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
