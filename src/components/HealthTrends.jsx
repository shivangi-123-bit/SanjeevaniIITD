import React, { useState } from "react";
import { Activity, HeartPulse, Bed, Footprints } from "lucide-react";

const data = {
  heartRate: {
    value: "72 BPM",
    change: "+2% from last month",
    positive: true,
  },
  bloodPressure: {
    value: "120/80",
    status: "Normal range",
  },
  sleepQuality: {
    value: "7.5 hrs",
    change: "-5% from last month",
    positive: false,
  },
  steps: {
    value: "8,243",
    change: "+12% from last month",
    positive: true,
  },
};

const recommendations = [
  {
    icon: Footprints,
    title: "Increase Daily Steps",
    description: "Try to reach 10,000 steps daily",
  },
  {
    icon: Bed,
    title: "Improve Sleep Schedule",
    description: "Aim for 8 hours of sleep",
  },
  {
    icon: HeartPulse,
    title: "Monitor Blood Pressure",
    description: "Check twice daily",
  },
];

const HealthTrends = () => {
  const [selectedRange, setSelectedRange] = useState("Last Month");

  const ranges = ["Last Week", "Last Month", "Last Year"];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Health Trends Overview</h2>
        <div className="flex space-x-2">
          {ranges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={`px-4 py-2 rounded-lg ${
                selectedRange === range
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Health Summary */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Average Heart Rate"
          value={data.heartRate.value}
          change={data.heartRate.change}
          positive={data.heartRate.positive}
        />
        <StatCard
          title="Blood Pressure"
          value={data.bloodPressure.value}
          status={data.bloodPressure.status}
        />
        <StatCard
          title="Sleep Quality"
          value={data.sleepQuality.value}
          change={data.sleepQuality.change}
          positive={data.sleepQuality.positive}
        />
        <StatCard
          title="Steps per Day"
          value={data.steps.value}
          change={data.steps.change}
          positive={data.steps.positive}
        />
      </div>

      {/* Health Metrics & Activity */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="h-48 bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-lg mb-2">Health Metrics Timeline</h3>
          {/* Graph Placeholder */}
          <div className="flex items-center justify-center h-full text-gray-400">
            [Graph Coming Soon]
          </div>
        </div>
        <div className="h-48 bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-lg mb-2">Activity Distribution</h3>
          {/* Graph Placeholder */}
          <div className="flex items-center justify-center h-full text-gray-400">
            [Graph Coming Soon]
          </div>
        </div>
      </div>

      {/* Health Recommendations */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Health Recommendations</h3>
        <button className="text-blue-500">View All</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {recommendations.map((rec, index) => (
          <RecommendationCard
            key={index}
            icon={rec.icon}
            title={rec.title}
            description={rec.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthTrends;

// =====================
// Reusable StatCard Component
// =====================
const StatCard = ({ title, value, change, status, positive }) => (
  <div className="bg-white p-4 rounded-xl shadow-md">
    <h3 className="text-sm text-gray-500 mb-2">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
    {change ? (
      <p
        className={`text-sm ${
          positive ? "text-green-500" : "text-red-500"
        } mt-1`}
      >
        {change}
      </p>
    ) : (
      <p className="text-sm text-gray-500 mt-1">{status}</p>
    )}
  </div>
);

// =====================
// Reusable RecommendationCard Component
// =====================
const RecommendationCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-center bg-orange-50 p-4 rounded-xl shadow-md">
    <div className="p-3 bg-orange-100 rounded-full">
      <Icon className="w-6 h-6 text-orange-700" />
    </div>
    <div className="ml-3">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);
