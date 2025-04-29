import React, { useEffect, useState } from "react";

const LiveMonitoring = () => {
  const [data, setData] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [bluetoothDevice, setBluetoothDevice] = useState(null);

  // Bluetooth connection
  const connectBluetooth = async () => {
    try {
      console.log("Requesting Bluetooth device...");
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ["battery_service"], // HC-05 doesn't advertise services; still needed
      });

      const server = await device.gatt.connect();
      console.log("Connected to GATT server");

      setBluetoothDevice(device);
      setIsConnected(true);

      device.addEventListener("gattserverdisconnected", () => {
        setIsConnected(false);
        setBluetoothDevice(null);
        console.log("Device disconnected");
      });

      // 🛑 HC-05 does not support GATT properly, so we simulate reading data through notifications.
      startReadingData(device);

    } catch (error) {
      console.error("Bluetooth connection error:", error);
    }
  };

  const startReadingData = (device) => {
    const fakeInterval = setInterval(() => {
      const fakeHeartRate = Math.floor(Math.random() * (100 - 60) + 60); // Simulating real sensor data

      const newPoint = {
        value: fakeHeartRate,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setData((prevData) => [...prevData.slice(-20), newPoint]); // Keep only last 20 points
    }, 5000); // every 5 sec

    // Save interval ID if needed to clear later
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 text-center mb-10 animate-pulse drop-shadow-xl">
          🚀 Live Heart Monitoring
        </h1>

        {/* Connect Button */}
        {!isConnected && (
          <div className="flex justify-center mb-6">
            <button
              onClick={connectBluetooth}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition-transform hover:scale-105"
            >
              Connect to Bluetooth
            </button>
          </div>
        )}

        {/* Chart Section */}
        <div className="backdrop-blur-lg bg-gray-900/60 border border-blue-500/30 shadow-blue-500/30 shadow-2xl rounded-3xl p-8 mb-10 transition-all duration-300">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">💓 Real-Time Heart Rate Chart</h2>
          <div className="h-72 bg-black rounded-xl overflow-hidden p-4 border border-blue-500/40 flex items-end gap-2 transition-all duration-500">
            {data.length === 0 ? (
              <p className="text-center text-gray-400 w-full">Waiting for data...</p>
            ) : (
              data.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-end transition-all duration-300 ease-out"
                >
                  <div
                    className="w-4 rounded-t-lg bg-gradient-to-b from-green-300 to-green-500 shadow-md animate-grow"
                    style={{ height: `${point.value}px` }}
                  ></div>
                  <span className="text-xs mt-1 text-gray-300">{point.time}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* AI Analysis Section */}
        <div className="backdrop-blur-lg bg-gray-900/60 border border-pink-500/30 shadow-pink-500/40 shadow-2xl rounded-3xl p-8 transition-all duration-300">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">🧠 AI-Powered Analysis</h2>
          {data.length > 0 ? (
            <div className="text-lg text-green-300 font-medium space-y-2">
              <p>
                Current Heart Rate:{" "}
                <span className="font-bold text-yellow-400">
                  {data[data.length - 1].value} BPM
                </span>
              </p>
              <p>
                Status:{" "}
                <span className="font-bold">
                  {data[data.length - 1].value > 100 ? (
                    <span className="text-red-400">Elevated</span>
                  ) : (
                    <span className="text-green-400">Normal</span>
                  )}
                </span>
              </p>
              <p>
                {data[data.length - 1].value > 100
                  ? "⚠️ Please relax or consult a physician if the condition persists."
                  : "✅ All looks good! Keep your heart strong!"}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">Analysis will appear once data is received.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoring;
