const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const entrepreneurRoutes = require('./routes/entrepreneurRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const fundingRoutes = require('./routes/fundingRoutes');
const marketOpportunityRoutes = require('./routes/marketOpportunityRoutes');
const mentorshipSessionRoutes = require('./routes/mentorshipSessionRoutes');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/entrepreneurs', entrepreneurRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/funding', fundingRoutes);
app.use('/api/market-opportunities', marketOpportunityRoutes);
app.use('/api/mentorship-sessions', mentorshipSessionRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
