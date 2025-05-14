const express = require('express');
const router = express.Router();

// ✅ Test route
router.get('/test', (req, res) => {
  res.json({ message: "Sensor API working perfectly 👌" });
});

module.exports = router;
