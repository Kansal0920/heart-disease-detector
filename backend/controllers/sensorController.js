const { getSerialData } = require('../utils/serial');

const getSensorData = async (req, res) => {
  try {
    const data = await getSerialData();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Sensor read failed' });
  }
};

module.exports = { getSensorData };
