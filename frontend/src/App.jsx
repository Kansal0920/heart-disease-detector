import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LiveMonitoring from "./pages/LiveMonitoring";
import AIPredictions from "./pages/AIPredictions";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import './index.css';
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/live-monitoring" element={<LiveMonitoring />} />
        <Route path="/ai-predictions" element={<AIPredictions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />

        {/* Welcome Page */}
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
              {/* Animated Heading */}
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 animate-heading">
                AI-Powered Heart Disease Detection
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Real-time monitoring & AI predictions for a healthier heart.
              </p>

              {/* Navigation Buttons - Equal Width */}
              <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
                <Link to="/live-monitoring">
                  <button className="w-full px-6 py-3 text-lg font-semibold rounded-lg transition-all glass-bg shadow-lg hover:scale-105 hover:shadow-blue-500">
                    🚀 Live Monitoring
                  </button>
                </Link>
                <Link to="/ai-predictions">
                  <button className="w-full px-6 py-3 text-lg font-semibold rounded-lg transition-all glass-bg shadow-lg hover:scale-105 hover:shadow-green-500">
                    🔍 AI Predictions
                  </button>
                </Link>
                <Link to="/reports">
                  <button className="w-full px-6 py-3 text-lg font-semibold rounded-lg transition-all glass-bg shadow-lg hover:scale-105 hover:shadow-purple-500">
                    📊 Reports
                  </button>
                </Link>
                <Link to="/settings">
                  <button className="w-full px-6 py-3 text-lg font-semibold rounded-lg transition-all glass-bg shadow-lg hover:scale-105 hover:shadow-red-500">
                    ⚙️ Settings
                  </button>
                </Link>
              </div>

              {/* Credits */}
              <p className="mt-12 text-sm text-blue-1000">
                <b>Developed by </b>{" "}
                <span className="text-blue-1000 font-semibold">
                  <b>Bhavya Kansal</b>
                </span>
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
