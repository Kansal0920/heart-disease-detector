const express = require('express');
const http = require('http');
const cors = require('cors');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = 5000;

// ✅ SerialPort Setup — adjust COM port as per your PC
const port = new SerialPort({
  path: 'COM5', // 🔁 Change this to your HC-05 COM port
  baudRate: 9600
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

parser.on('data', (data) => {
  try {
    const parsedData = JSON.parse(data);
    console.log("Data from Bluetooth:", parsedData);
    io.emit('sensorData', parsedData); // Send to frontend
  } catch (error) {
    console.log("Invalid JSON from Serial:", data);
  }
});

io.on('connection', (socket) => {
  console.log('Frontend connected:', socket.id);
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
