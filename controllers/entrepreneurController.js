const db = require('../db');

exports.createProfile = (req, res) => {
    const { entrepreneur_id, business_name, description, location, stage, website } = req.body;

    db.query('INSERT INTO EntrepreneurProfile (entrepreneur_id, business_name, description, location, stage, website) VALUES (?, ?, ?, ?, ?, ?)', 
        [entrepreneur_id, business_name, description, location, stage, website], 
        (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error.' });
            res.status(201).json({ message: 'Entrepreneur profile created.', entrepreneurId: results.insertId });
        }
    );
};
