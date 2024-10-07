const bcrypt = require('bcryptjs');
const db = require('../db');

// User registration
exports.register = async (req, res) => {
    const { username, password, email, role } = req.body;

    if (!username || !password || !email || !role) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    db.query('SELECT * FROM User WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error.' });
        if (results.length > 0) return res.status(400).json({ message: 'User already exists.' });

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query('INSERT INTO User (username, password, email, role) VALUES (?, ?, ?, ?)', 
            [username, hashedPassword, email, role], 
            (err, results) => {
                if (err) return res.status(500).json({ message: 'Database error.' });
                res.status(201).json({ message: 'User registered successfully.', userId: results.insertId });
            }
        );
    });
};

// User login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    db.query('SELECT * FROM User WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error.' });
        if (results.length === 0) return res.status(400).json({ message: 'Invalid credentials.' });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });

        res.json({ message: 'Login successful.', userId: user.user_id, role: user.role });
    });
};
