const db = require('../db');

exports.createOpportunity = (req, res) => {
    const { title, description, amount, application_deadline } = req.body;

    db.query('INSERT INTO FundingOpportunity (title, description, amount, application_deadline) VALUES (?, ?, ?, ?)', 
        [title, description, amount, application_deadline], 
        (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error.' });
            res.status(201).json({ message: 'Funding opportunity created.', fundingId: results.insertId });
        }
    );
};
