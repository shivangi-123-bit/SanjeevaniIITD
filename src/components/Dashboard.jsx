import React from "react";
import { Bell, User, Calendar, BookOpen, Scan, Bot, IdCard, ClipboardCheck, Activity } from "lucide-react";

// Reusable Card Component
const Card = ({ icon: Icon, title, description }) => (
  <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
    <div className="flex items-center space-x-3 mb-2">
      <Icon className="w-6 h-6 text-gray-700" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-gray-500 text-sm">{description}</p>
    <a href="#" className="text-blue-600 text-sm font-medium mt-2 inline-block">
      Learn more →
    </a>
  </div>
);

// Reusable Button Component
const Button = ({ label, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{label}</span>
  </button>
);

// Sidebar Navigation
const SidebarItem = ({ label, icon: Icon, active }) => (
  <div
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
      active ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4 space-y-4">
        <SidebarItem label="My Dashboard" icon={Activity} active />
        <SidebarItem label="My Appointments" icon={Calendar} />
        <SidebarItem label="Medical History" icon={BookOpen} />
        <SidebarItem label="Health Trends" icon={ClipboardCheck} />
        <SidebarItem label="Settings" icon={User} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 cursor-pointer" />
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6" />
              <span>Welcome, John Smith</span>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-white shadow-md rounded-2xl p-4 mb-6">
          <h3 className="text-lg font-semibold mb-3">Quick Access</h3>
          <div className="flex space-x-4">
            <Button label="Book Appointment" icon={Calendar} />
            <Button label="View Medical Records" icon={BookOpen} />
          </div>
        </div>

        {/* Summary and Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow-md rounded-2xl p-4">
            <h3 className="text-lg font-semibold">My Health Summary</h3>
            <p className="text-sm text-gray-500 mt-2">✅ Scheduled Appointments</p>
            <p className="text-sm text-gray-500">🟡 3 Consultations</p>
            <p className="text-sm text-gray-500 mt-2">
              Next Medicine: <span className="font-semibold">Vitamin D</span> at 2:00 PM
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4">
            <h3 className="text-lg font-semibold">My Care</h3>
            <p className="text-sm text-gray-500 mt-2">🕒 Next Checkup: 10:30 AM - Dr. Sarah Wilson</p>
            <p className="text-sm text-gray-500 mt-2">📄 Test Reports: 5 Reports</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            icon={Activity}
            title="Health Risk Detection"
            description="AI-powered health risk assessment and early detection system."
          />
          <Card
            icon={Scan}
            title="Medicine Scanner"
            description="Scan and identify medications, interactions, and side effects."
          />
          <Card
            icon={Bot}
            title="Virtual Assistant"
            description="24/7 AI healthcare assistant for patient support and guidance."
          />
          <Card
            icon={ClipboardCheck}
            title="Appointment Scheduler"
            description="Smart scheduling system with automated reminders."
          />
          <Card
            icon={IdCard}
            title="Health ID Card"
            description="Access your digital health ID and insurance information."
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
