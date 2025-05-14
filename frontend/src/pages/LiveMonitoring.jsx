import React, { useEffect, useState } from "react";
import io from "socket.io-client";


const socket = io("http://localhost:5000");

const LiveMonitoring = () => {
  const [sensorData, setSensorData] = useState({
    heartRate: "--",
    spo2: "--",
    temperature: "--",
    ecg: "--",
    bp: "--"
  });

  useEffect(() => {
    socket.on("sensorData", (data) => {
      setSensorData(data);
    });
  }, []);

  return (
    <div className="live-monitoring-page bg-[#0f0c29] min-h-screen text-white font-sans p-8">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-10 glowing-text">Live Monitoring Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        <div className="sensor-card bg-[#1f1c2c] rounded-2xl p-6 shadow-xl border border-purple-700">
          <h2 className="text-2xl font-semibold mb-4 text-[#d0a3ff]">Heart Rate</h2>
          <p className="text-4xl font-bold text-[#ff6384]">{sensorData.heartRate} bpm</p>
        </div>

        <div className="sensor-card bg-[#1f1c2c] rounded-2xl p-6 shadow-xl border border-purple-700">
          <h2 className="text-2xl font-semibold mb-4 text-[#a0e9ff]">SpO₂</h2>
          <p className="text-4xl font-bold text-[#36a2eb]">{sensorData.spo2} %</p>
        </div>

        <div className="sensor-card bg-[#1f1c2c] rounded-2xl p-6 shadow-xl border border-purple-700">
          <h2 className="text-2xl font-semibold mb-4 text-[#ffe29f]">Body Temperature</h2>
          <p className="text-4xl font-bold text-[#ffce56]">{sensorData.temperature} °C</p>
        </div>

        <div className="sensor-card bg-[#1f1c2c] rounded-2xl p-6 shadow-xl border border-purple-700">
          <h2 className="text-2xl font-semibold mb-4 text-[#baffc9]">ECG (Lead II)</h2>
          <p className="text-4xl font-bold text-[#57f287]">{sensorData.ecg} mV</p>
        </div>

        <div className="sensor-card bg-[#1f1c2c] rounded-2xl p-6 shadow-xl border border-purple-700 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-[#ffc3a0]">Blood Pressure</h2>
          <p className="text-4xl font-bold text-[#ff9f40]">{sensorData.bp} mmHg</p>
        </div>
      </div>

      <p className="text-center mt-10 text-sm italic text-gray-400 tracking-wide">
        🔁 Sensor values auto-refresh from HC-05 every second
      </p>
    </div>
  );
};

export default LiveMonitoring;
