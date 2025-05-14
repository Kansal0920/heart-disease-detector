// src/pages/Settings.jsx
import React from "react";
import { Cog, Bluetooth, RefreshCcw, Moon, Info } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 text-purple-400">
          <Cog size={30} className="text-purple-500" /> Settings
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-purple-500 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Moon size={20} className="text-yellow-300" />
              <h4 className="text-lg font-semibold">Theme</h4>
            </div>
            <p className="text-sm text-gray-400 mb-3">Toggle between light, dark, or AI glow themes.</p>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm">Toggle Theme</button>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-blue-500 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Bluetooth size={20} className="text-blue-400" />
              <h4 className="text-lg font-semibold">Bluetooth Pairing</h4>
            </div>
            <p className="text-sm text-gray-400 mb-3">Connect with HC-05 to receive live data.</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm">Connect</button>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-red-500 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <RefreshCcw size={20} className="text-red-400" />
              <h4 className="text-lg font-semibold">Reset Data</h4>
            </div>
            <p className="text-sm text-gray-400 mb-3">Erase all patient history and start fresh.</p>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm">Reset</button>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-gray-500 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Info size={20} className="text-gray-400" />
              <h4 className="text-lg font-semibold">About</h4>
            </div>
            <p className="text-sm text-gray-400">Version 1.0 — Designed by Mr. Kansal 🚀</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
