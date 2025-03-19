import React, { useState } from "react";
import { UploadCloud } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HealthProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    systolic: "",
    diastolic: "",
    sugarLevel: "",
    medicalRecords: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "medicalRecords" && files && files.length > 0) {
      setFormData({ ...formData, medicalRecords: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  // Handle skip button (navigate to another page)
  const handleSkip = () => {
    navigate("/dashboard"); // Redirect after skipping
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl flex">
        {/* Left Side - Doctor Image */}
        <div className="w-1/2 p-6 hidden md:block">
          <img
            src={`${process.env.PUBLIC_URL}/doctor-image.png`}
            alt="Doctor"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Complete Your Health Profile
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Age Input */}
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
            />

            {/* Gender Dropdown */}
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {/* Height & Weight */}
            <div className="flex space-x-4">
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Height (cm)"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-blue-500"
              />
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Weight (kg)"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-blue-500"
              />
            </div>

            {/* Blood Pressure */}
            <div className="flex space-x-4">
              <input
                type="number"
                name="systolic"
                value={formData.systolic}
                onChange={handleChange}
                placeholder="Systolic"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-blue-500"
              />
              <input
                type="number"
                name="diastolic"
                value={formData.diastolic}
                onChange={handleChange}
                placeholder="Diastolic"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-blue-500"
              />
            </div>

            {/* Sugar Level */}
            <input
              type="number"
              name="sugarLevel"
              value={formData.sugarLevel}
              onChange={handleChange}
              placeholder="Enter sugar level"
              className="w-full px-4 py-2 border rounded-lg focus:outline-blue-500"
            />

            {/* File Upload */}
            <label
              htmlFor="medicalRecords"
              className="w-full border-dashed border-2 border-gray-300 rounded-lg p-4 flex items-center justify-center cursor-pointer"
            >
              <UploadCloud className="text-gray-500 mr-2" size={32} />
              <span className="text-gray-500">
                Drag and drop your medical records here or{" "}
                <span className="text-blue-500">click to upload</span>
              </span>
            </label>
            <input
              type="file"
              id="medicalRecords"
              name="medicalRecords"
              className="hidden"
              onChange={handleChange}
            />
            {/* Show uploaded file name */}
            {formData.medicalRecords && (
              <p className="text-sm text-gray-600 mt-2">
                Uploaded: {formData.medicalRecords.name}
              </p>
            )}

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handleSkip}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
              >
                Skip for Now
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HealthProfile;
