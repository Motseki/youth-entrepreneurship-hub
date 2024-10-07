const db = require('../db');

exports.createProfile = (req, res) => {
    const { mentor_id, expertise, bio, availability } = req.body;

    db.query('INSERT INTO MentorProfile (mentor_id, expertise, bio, availability) VALUES (?, ?, ?, ?)', 
        [mentor_id, expertise, bio, availability], 
        (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error.' });
            res.status(201).json({ message: 'Mentor profile created.', mentorId: results.insertId });
        }
    );
};
