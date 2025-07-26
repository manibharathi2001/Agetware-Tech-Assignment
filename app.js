const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const db = require('./models/db');

dotenv.config();
const app = express();
app.use(express.json());

// Create tables
const schema = fs.readFileSync('./models/schema.sql', 'utf8');
db.exec(schema, (err) => {
  if (err) console.error("Schema error:", err.message);
});

// Routes
const loanRoutes = require('./routes/loanRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const customerRoutes = require('./routes/customerRoutes');

app.use('/api/v1/loans', loanRoutes);
app.use('/api/v1/loans', paymentRoutes);
app.use('/api/v1/customers', customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


const fs = require('fs');
const db = require('./models/db');
const schema = fs.readFileSync('./models/schema.sql', 'utf8');
db.exec(schema, (err) => {
  if (err) console.error("Error creating tables:", err.message);
});
