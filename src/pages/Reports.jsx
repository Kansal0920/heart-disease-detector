import React, { useEffect, useState } from "react";
import axios from "axios";
import { LucideFileText, LucideCheckCircle2 } from "lucide-react";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get("/api/report/all");
        setReports(res.data);
        console.log("📥 Reports fetched:", res.data);
      } catch (error) {
        console.error("❌ Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <LucideFileText className="text-pink-500" />
        AI-Generated Reports
      </h1>

      {reports.length === 0 ? (
        <p className="text-gray-400">No reports found yet...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-[#1e293b] border border-gray-700 rounded-2xl p-5 shadow-lg transition-all hover:scale-[1.02]"
            >
              <div className="text-lg font-semibold mb-1 flex items-center gap-2 text-blue-300">
                <LucideCheckCircle2 className="text-green-400" />
                Report #{index + 1}
              </div>
              <div className="text-sm mt-1">
                <strong>Name:</strong> {report.name}
              </div>
              <div className="text-sm mt-1">
                <strong>Age:</strong> {report.age}
              </div>
              <div className="text-sm mt-1">
                <strong>Risk Level:</strong>{" "}
                <span
                  className={`${
                    report.risk === "High"
                      ? "text-red-400"
                      : report.risk === "Moderate"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                >
                  {report.risk}
                </span>
              </div>
              <div className="text-sm mt-1">
                <strong>Date:</strong>{" "}
                {new Date(report.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
