import React, { useState } from "react";
import { Plus, Search, FileText } from "lucide-react";

const records = [
  {
    title: "Annual Physical Examination",
    doctor: "Dr. Sarah Wilson",
    date: "January 15, 2024",
    type: "General Health",
  },
  {
    title: "Blood Test Results",
    doctor: "Lab Corp Analytics",
    date: "December 28, 2023",
    type: "Laboratory",
  },
  {
    title: "Chest X-Ray",
    doctor: "City Hospital Radiology",
    date: "November 10, 2023",
    type: "Radiology",
  },
];

const MedicalHistory = () => {
  const [activeTab, setActiveTab] = useState("All Records");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter records based on search term
  const filteredRecords = records.filter((record) =>
    record.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Medical History</h2>
        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Medical Record</span>
        </button>
      </div>

      {/* Tab Section */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <div className="flex space-x-6 mb-4">
          {["All Records", "Medications"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "text-black font-semibold border-b-2 border-black"
                  : "text-gray-500"
              } pb-2`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 mb-4">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search medical records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none ml-2"
          />
        </div>

        {/* Medical Records List */}
        <div className="space-y-4">
          {filteredRecords.map((record, index) => (
            <RecordCard
              key={index}
              title={record.title}
              doctor={record.doctor}
              date={record.date}
              type={record.type}
              isHighlighted={index === 0} // Highlight first record
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;

// =====================
// Reusable RecordCard Component
// =====================
const RecordCard = ({ title, doctor, date, type, isHighlighted }) => (
  <div
    className={`p-4 border ${
      isHighlighted ? "border-blue-500 bg-blue-50" : "border-gray-200"
    } rounded-lg flex justify-between items-center shadow-sm`}
  >
    <div className="flex items-start space-x-3">
      <div className="p-2 bg-orange-100 rounded-full">
        <FileText className="w-6 h-6 text-orange-700" />
      </div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-500">{doctor}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-xs text-gray-400">{type}</p>
    </div>
  </div>
);
