const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
const sensorRoutes = require('./routes/sensorRoutes');
const reportRoutes = require('./routes/reportRoutes'); // ✅ Include PDF route

app.use('/api/sensor', sensorRoutes);
app.use('/api', reportRoutes); // ✅ Mount at /api (PDF POST will go to /api/generate-pdf)

// ✅ Base route for browser testing
app.get('/', (req, res) => {
  res.send('Backend server is up and running! 🚀');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
