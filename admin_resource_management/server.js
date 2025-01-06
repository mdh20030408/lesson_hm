// language:server.js
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'admin_resource_management'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// User login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            bcrypt.compare(password, results[0].password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    const token = jwt.sign({ id: results[0].id, role: results[0].role }, 'secretkey', { expiresIn: '1h' });
                    res.json({ token, user: { id: results[0].id, role: results[0].role } });
                } else {
                    res.status(401).send('Invalid password');
                }
            });
        } else {
            res.status(401).send('User not found');
        }
    });
});

// Get resource list
app.get('/resources', (req, res) => {
    db.query('SELECT * FROM resources', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add new resource
app.post('/resources', (req, res) => {
    const { name, quantity, description } = req.body;
    db.query('INSERT INTO resources (name, quantity, description) VALUES (?, ?, ?)', [name, quantity, description], (err, result) => {
        if (err) throw err;
        res.send('Resource added');
    });
});

// Update resource
app.put('/resources/:id', (req, res) => {
    const { name, quantity, description } = req.body;
    db.query('UPDATE resources SET name = ?, quantity = ?, description = ? WHERE id = ?', [name, quantity, description, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Resource updated');
    });
});

// Delete resource
app.delete('/resources/:id', (req, res) => {
    db.query('DELETE FROM resources WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Resource deleted');
    });
});

// Submit resource request
app.post('/requests', (req, res) => {
    const { user_id, resource_id, quantity } = req.body;
    db.query('INSERT INTO requests (user_id, resource_id, quantity) VALUES (?, ?, ?)', [user_id, resource_id, quantity], (err, result) => {
        if (err) throw err;
        res.send('Request submitted');
    });
});

// Get request list
app.get('/requests', (req, res) => {
    db.query('SELECT * FROM requests', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Approve or reject request
app.put('/requests/:id', (req, res) => {
    const { status } = req.body;
    db.query('UPDATE requests SET status = ? WHERE id = ?', [status, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Request updated');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// language:server.js
// Logout route
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.send('Logged out');
});
// language:server.js
app.use(express.static('public'));