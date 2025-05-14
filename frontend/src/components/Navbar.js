import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#161b22] p-4 shadow-lg flex justify-between items-center px-10">
      <h1 className="text-xl font-bold text-[#58a6ff] flex items-center">
        <span className="text-red-500 text-2xl mr-2">❤️</span> Heart Disease Detection
      </h1>
      <div className="space-x-6 text-white">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/live-monitoring" className="hover:text-gray-400">Live Monitoring</Link>
        <Link to="/ai-predictions" className="hover:text-gray-400">AI Predictions</Link>
        <Link to="/reports" className="hover:text-gray-400">Reports</Link>
        <Link to="/settings" className="hover:text-gray-400">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
