const db = require('../db');

exports.createSession = (req, res) => {
    const { entrepreneur_id, mentor_id, session_date, notes } = req.body;

    db.query('INSERT INTO MentorshipSession (entrepreneur_id, mentor_id, session_date, notes) VALUES (?, ?, ?, ?)', 
        [entrepreneur_id, mentor_id, session_date, notes], 
        (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error.' });
            res.status(201).json({ message: 'Mentorship session created.', sessionId: results.insertId });
        }
    );
};
