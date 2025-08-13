const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));


const db = new sqlite3.Database('./backend/database.db', (err) => {
    if (err) console.error(err.message);
    else console.log("Connected to SQLite database.");
});

db.run(`CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    jobTitle TEXT,
    company TEXT,
    mobileNumber TEXT,
    email TEXT,
    website TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)`);


app.post('/api/contact', (req, res) => {
    const { firstName, lastName, jobTitle, company, mobileNumber, email, website } = req.body;
    db.run(
        `INSERT INTO registrations (firstName, lastName, jobTitle, company, mobileNumber, email, website) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [firstName, lastName, jobTitle, company, mobileNumber, email, website],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ success: true, id: this.lastID });
            }
        }
    );
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));