import React, { useState } from 'react';
import {
  LucideHeartPulse,
  LucideThermometer,
  LucideActivitySquare,
  LucideBrainCog,
  LucideFlameKindling
} from 'lucide-react';
import axios from 'axios';

export default function AIPredictionsPage() {
  const [riskLevel, setRiskLevel] = useState("Moderate");
  const [tips, setTips] = useState("Improve your diet and exercise 30 min daily.");
  const [report, setReport] = useState(null);  // New state for fetched report

  const handlePredict = async () => {
    const random = Math.random();
    let level = "Moderate";
    let message = "Improve your diet and exercise 30 min daily.";

    if (random > 0.7) {
      level = "High";
      message = "Consider immediate medical evaluation and reduce salt intake.";
    } else if (random > 0.4) {
      level = "Moderate";
      message = "Improve your diet and exercise 30 min daily.";
    } else {
      level = "Low";
      message = "You're doing well! Maintain your lifestyle and routine checkups.";
    }

    setRiskLevel(level);
    setTips(message);

    // Simulating backend report fetch (no actual DB interaction)
    const fetchedReport = {
      name: "Mr. Kansal",
      age: 21,
      risk: level,
      createdAt: new Date().toISOString(),
    };

    setReport(fetchedReport);  // Set fetched report to state
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6 font-sans">
      <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-pulse flex items-center justify-center gap-2">
        <LucideBrainCog className="h-8 w-8 text-cyan-400" /> AI Predictions Dashboard
      </h1>

      {/* Manual Input Section */}
      <div className="mb-6 backdrop-blur-sm bg-[#1e293bcc] border border-cyan-900/20 rounded-2xl shadow-[0_0_30px_#00FFFF22]">
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
            <LucideActivitySquare className="text-cyan-400" /> Manual Patient Inputs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-sm mb-1">Age</label><input type="number" placeholder="e.g. 45" className="bg-[#334155] rounded-md w-full p-2" /></div>
            <div><label className="block text-sm mb-1">Gender</label><select className="bg-[#334155] w-full p-2 rounded-md"><option>Male</option><option>Female</option></select></div>
            <div><label className="block text-sm mb-1">Height (cm)</label><input type="number" placeholder="e.g. 170" className="bg-[#334155] rounded-md w-full p-2" /></div>
            <div><label className="block text-sm mb-1">Weight (kg)</label><input type="number" placeholder="e.g. 70" className="bg-[#334155] rounded-md w-full p-2" /></div>
            <div><label className="block text-sm mb-1">Smoking Status</label><select className="bg-[#334155] w-full p-2 rounded-md"><option>Yes</option><option>No</option></select></div>
            <div><label className="block text-sm mb-1">Alcohol Consumption</label><select className="bg-[#334155] w-full p-2 rounded-md"><option>Yes</option><option>No</option></select></div>
            <div><label className="block text-sm mb-1">Diabetes</label><select className="bg-[#334155] w-full p-2 rounded-md"><option>Yes</option><option>No</option></select></div>
          </div>
        </div>
      </div>

      {/* Sensor Data Section */}
      <div className="mb-6 backdrop-blur-sm bg-[#1e293bcc] border border-cyan-900/20 rounded-2xl shadow-[0_0_30px_#00FFFF22]">
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
            <LucideHeartPulse className="text-pink-400" /> Live Sensor Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label>Heart Rate</label><input disabled placeholder="78 bpm" className="bg-[#334155] text-green-400 w-full p-2 rounded-md" /></div>
            <div><label>SpO2</label><input disabled placeholder="97%" className="bg-[#334155] text-green-400 w-full p-2 rounded-md" /></div>
            <div><label>Pulse</label><input disabled placeholder="82 bpm" className="bg-[#334155] text-green-400 w-full p-2 rounded-md" /></div>
            <div><label>Body Temperature</label><input disabled placeholder="36.7°C" className="bg-[#334155] text-green-400 w-full p-2 rounded-md" /></div>
            <div><label>BP (Estimated)</label><input disabled placeholder="120/80 mmHg" className="bg-[#334155] text-yellow-400 w-full p-2 rounded-md" /></div>
            <div><label>ECG Signal</label><input disabled placeholder="Live Graph →" className="bg-[#334155] text-blue-400 w-full p-2 rounded-md" /></div>
          </div>
        </div>
      </div>

      {/* AI Prediction Result */}
      <div className="mb-6 backdrop-blur-sm bg-[#1e293bcc] border border-cyan-900/20 rounded-2xl shadow-[0_0_30px_#00FFFF22] text-center">
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-cyan-300 flex items-center justify-center gap-2">
            <LucideBrainCog className="text-purple-400" /> AI-Based Heart Disease Prediction
          </h2>
          <p className="text-3xl font-bold text-red-400 animate-pulse">{riskLevel} Risk</p>
          <button
            onClick={handlePredict}
            className="mt-2 px-6 py-2 rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg transition-all"
          >
            Run AI Prediction
          </button>
        </div>
      </div>

      {/* Tips From AAgni */}
      <div className="backdrop-blur-sm bg-[#1e293bcc] border border-yellow-900/20 rounded-2xl shadow-[0_0_30px_#FFD70022]">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-yellow-300 flex items-center gap-2">
            <LucideFlameKindling className="text-yellow-400" /> Tips From AAgni
          </h2>
          <textarea
            value={tips}
            readOnly
            className="mt-2 bg-[#334155] text-yellow-300 w-full p-3 rounded-md resize-none"
          />
        </div>
      </div>

      {/* Fetched Report Section */}
      {report && (
        <div className="mt-6 backdrop-blur-sm bg-[#1e293bcc] border border-cyan-900/20 rounded-2xl shadow-[0_0_30px_#00FFFF22] text-center">
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-cyan-300">Fetched Report</h2>
            <p><strong>Name:</strong> {report.name}</p>
            <p><strong>Age:</strong> {report.age}</p>
            <p><strong>Risk Level:</strong> {report.risk}</p>
            <p><strong>Report Date:</strong> {report.createdAt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
