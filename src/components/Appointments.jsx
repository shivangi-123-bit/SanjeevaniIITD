import React, { useState } from "react";
import {
  Calendar,
  HeartPulse,
  Search,
  PlusCircle,
} from "lucide-react";

// Reusable Tab Button
const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium ${
      active ? "text-white bg-black rounded-xl" : "text-gray-600 hover:bg-gray-100 rounded-xl"
    }`}
  >
    {label}
  </button>
);

// Reusable Appointment Card
// Correct the way you pass icons
const AppointmentCard = ({ icon: Icon, doctor, specialty, time, duration }) => (
  <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
    <div className="flex items-center space-x-3">
      <div className="p-3 bg-gray-100 rounded-full">
        {/* Make sure Icon is properly used as a component */}
        {Icon && <Icon className="w-6 h-6 text-gray-700" />}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{doctor}</h3>
        <p className="text-gray-500 text-sm">{specialty}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-semibold text-gray-700">{time}</p>
      <p className="text-xs text-gray-500">{duration}</p>
    </div>
  </div>
);


const Appointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Dummy appointment data
  const appointments = [
    {
      doctor: "Dr. Sarah Wilson",
      specialty: "General Checkup",
      time: "Today, 10:30 AM",
      duration: "30 minutes",
      icon: HeartPulse,
    },
    {
      doctor: "Dr. Michael Brown",
      specialty: "Dental Cleaning",
      time: "Tomorrow, 2:00 PM",
      duration: "45 minutes",
    },
    {
      doctor: "Dr. Emily Chen",
      specialty: "Cardiology Consultation",
      time: "Next Week, Mon 11:15 AM",
      duration: "60 minutes",
      icon: HeartPulse,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4 space-y-4">
        <SidebarItem label="My Dashboard" icon={Calendar} />
        <SidebarItem label="My Appointments" icon={Calendar} active />
        <SidebarItem label="Medical History" icon={HeartPulse} />
        <SidebarItem label="Health Trends" icon={HeartPulse} />
        <SidebarItem label="Settings" icon={HeartPulse} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Appointments</h2>
          <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
            <PlusCircle className="w-5 h-5" />
            <span>New Appointment</span> 
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-4">
          <TabButton
            label="Upcoming"
            active={activeTab === "upcoming"}
            onClick={() => setActiveTab("upcoming")}
          />
          <TabButton
            label="Past"
            active={activeTab === "past"}
            onClick={() => setActiveTab("past")}
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 bg-white shadow-md rounded-xl p-3 mb-6">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search appointments..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
        </div>

        {/* Appointment List */}
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <AppointmentCard
              key={index}
              icon={appointment.icon}
              doctor={appointment.doctor}
              specialty={appointment.specialty}
              time={appointment.time}
              duration={appointment.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Sidebar Item Component
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

export default Appointments;
