import React from 'react';
import { Link } from 'react-router-dom';
import { LucideMonitor, LucideCpu, LucideBarChart2 } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
        <LucideMonitor className="text-pink-500" />
        Heart Disease Detection System
      </h1>
      <p className="text-xl mb-6">
        Welcome to our AI-powered heart disease detection system. Please select one of the options below to begin.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/live-monitoring"
          className="bg-[#1e293b] p-6 rounded-2xl shadow-lg text-center text-lg font-semibold text-white hover:bg-[#374151]"
        >
          <LucideCpu className="text-pink-500 mb-2 w-10 h-10 mx-auto" />
          Live Monitoring
        </Link>
        <Link
          to="/ai-predictions"
          className="bg-[#1e293b] p-6 rounded-2xl shadow-lg text-center text-lg font-semibold text-white hover:bg-[#374151]"
        >
          <LucideBarChart2 className="text-pink-500 mb-2 w-10 h-10 mx-auto" />
          AI Predictions
        </Link>
        <Link
          to="/reports"
          className="bg-[#1e293b] p-6 rounded-2xl shadow-lg text-center text-lg font-semibold text-white hover:bg-[#374151]"
        >
          <LucideMonitor className="text-pink-500 mb-2 w-10 h-10 mx-auto" />
          Reports
        </Link>
      </div>
    </div>
  );
}
