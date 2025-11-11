const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 6000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample users
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Michael Johnson', email: 'michael@example.com' }
];

// Routes
app.get('/', (req, res) => {
  res.send('🚀 User Service Running');
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ User service running on http://localhost:${PORT}`);
});
