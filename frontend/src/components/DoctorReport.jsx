// src/components/DoctorReport.jsx
import React from "react";

const DoctorReport = ({ data }) => {
  const {
    name = "John Doe",
    age = "--",
    gender = "--",
    heartRate = "--",
    spo2 = "--",
    temperature = "--",
    ecg = "--",
    bloodPressure = "--",
    aiRisk = "--",
    aiSuggestion = "--",
  } = data;

  return (
    <div
      id="report-section"
      className="bg-[#1e1b34] text-white p-6 rounded-xl shadow-xl w-full max-w-3xl mx-auto border border-purple-500 font-sans"
    >
      <h1 className="text-center text-cyan-400 text-2xl font-bold mb-4">
        Doctor's Report
      </h1>
      <div className="grid grid-cols-2 gap-6 text-base">
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Heart Rate:</strong> {heartRate} bpm</p>
          <p><strong>SpO₂:</strong> {spo2} %</p>
        </div>
        <div>
          <p><strong>Temperature:</strong> {temperature} °C</p>
          <p><strong>ECG:</strong> {ecg} mV</p>
          <p><strong>Blood Pressure:</strong> {bloodPressure} mmHg</p>
          <p><strong>AI Risk:</strong> {aiRisk}</p>
          <p><strong>AI Suggestion:</strong> {aiSuggestion}</p>
        </div>
      </div>
      <p className="text-sm mt-6 italic text-gray-400 text-center">
        * AI-generated report. Please consult a certified physician for final diagnosis.
      </p>
    </div>
  );
};

export default DoctorReport;
