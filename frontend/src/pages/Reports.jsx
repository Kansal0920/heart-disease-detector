import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

const Reports = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [risk, setRisk] = useState("Low");
  const reportRef = useRef();

  const handleDownload = () => {
    const opt = {
      margin: 0.5,
      filename: "Heart-Report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(reportRef.current).set(opt).save();
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-6">📄 Generate Your Heart Report</h2>

      <div className="max-w-xl mx-auto bg-white/10 p-6 rounded-xl space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-black/80 text-white border border-gray-700"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-3 rounded bg-black/80 text-white border border-gray-700"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-3 rounded bg-black/80 text-white border border-gray-700"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div className="text-lg text-center text-yellow-400">
          <b>AI Risk Prediction:</b> {risk}
        </div>

        <button
          onClick={handleDownload}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded"
        >
          📥 Download Report
        </button>
      </div>

      {/* Hidden Report HTML */}
      <div style={{ display: "none" }}>
        <div ref={reportRef} style={{ padding: "20px", fontFamily: "Arial", color: "#000" }}>
          <h1 style={{ textAlign: "center", color: "#2c3e50" }}>❤️ AI Heart Disease Report</h1>
          <hr />
          <p><strong>Name:</strong> {name || "N/A"}</p>
          <p><strong>Age:</strong> {age || "N/A"}</p>
          <p><strong>Gender:</strong> {gender || "N/A"}</p>
          <p>
            <strong>Predicted Risk:</strong>{" "}
            <span style={{ color: risk === "High" ? "red" : risk === "Medium" ? "orange" : "green" }}>
              {risk}
            </span>
          </p>
          <hr />
          <p style={{ fontSize: "12px", marginTop: "20px", color: "#555" }}>
            Report auto-generated using AI-Powered Heart Disease Detection System.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
