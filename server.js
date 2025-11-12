const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 6000;

// Middleware
app.use(cors({
    origin: ["http://genzcodershub.com", "http://www.genzcodershub.com","http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(express.json());

// Sample users
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Michael Johnson', email: 'michael@example.com' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com' },
  { id: 5, name: 'Chris Brown', email: 'chris@example.com' },
  { id: 6, name: 'Sarah Wilson', email: 'sarah@example.com' },
  { id: 7, name: 'David Lee', email: 'david@example.com' },
  { id: 8, name: 'Lisa Anderson', email: 'lisa@example.com' },
  { id: 9, name: 'James Taylor', email: 'james@example.com' },
  { id: 10, name: 'Olivia Martinez', email: 'olivia@example.com' }
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
