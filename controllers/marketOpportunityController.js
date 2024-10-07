const db = require('../db');

exports.createOpportunity = (req, res) => {
    const { title, description, location } = req.body;

    db.query('INSERT INTO MarketOpportunity (title, description, location) VALUES (?, ?, ?)', 
        [title, description, location], 
        (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error.' });
            res.status(201).json({ message: 'Market opportunity created.', marketOpportunityId: results.insertId });
        }
    );
};
