import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const HealthProfile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 items-center justify-center">
      <div className="container mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">
          {/* Left Section - Doctor Illustration */}
          <div className="flex justify-center items-center">
            <img
              src="/image.png"
              alt="Doctor Illustration"
              className="w-full max-w-xs lg:max-w-md rounded-lg shadow-md"
            />
          </div>

          {/* Right Section - Form */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-700">
                Complete Your Health Profile
              </h2>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-gray-500 text-sm">Step 1 of 3</span>
              </div>
            </div>

            <form className="space-y-4">
              {/* Age */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Gender
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Height & Weight */}
              <div className="grid grid-cols-2 gap-4">
                {/* Height */}
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Height
                  </label>
                  <div className="flex border rounded-lg px-3 py-2">
                    <input
                      type="number"
                      placeholder="Height"
                      className="w-full outline-none"
                    />
                    <select className="outline-none bg-transparent">
                      <option>cm</option>
                      <option>in</option>
                    </select>
                  </div>
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Weight
                  </label>
                  <div className="flex border rounded-lg px-3 py-2">
                    <input
                      type="number"
                      placeholder="Weight"
                      className="w-full outline-none"
                    />
                    <select className="outline-none bg-transparent">
                      <option>kg</option>
                      <option>lbs</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Blood Pressure */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Blood Pressure
                </label>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    placeholder="Systolic"
                    className="w-full border rounded-lg px-3 py-2 outline-none"
                  />
                  <span className="text-gray-500 mt-2">/</span>
                  <input
                    type="number"
                    placeholder="Diastolic"
                    className="w-full border rounded-lg px-3 py-2 outline-none"
                  />
                  <span className="text-gray-500 mt-2">mmHg</span>
                </div>
              </div>

              {/* Sugar Level */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Sugar Level
                </label>
                <div className="flex border rounded-lg px-3 py-2">
                  <input
                    type="number"
                    placeholder="Enter sugar level"
                    className="w-full outline-none"
                  />
                  <select className="outline-none bg-transparent">
                    <option>mg/dL</option>
                    <option>mmol/L</option>
                  </select>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Upload Medical Records
                </label>
                <div
                  className="border-dashed border-2 border-gray-300 rounded-lg px-4 py-8 text-center cursor-pointer hover:bg-gray-100"
                  onClick={() => document.getElementById("fileUpload").click()}
                >
                  <FaCloudUploadAlt className="text-gray-400 mx-auto text-4xl mb-2" />
                  <p className="text-gray-500">Drag and drop your medical records here or</p>
                  <p className="text-orange-500 font-semibold cursor-pointer">
                    click to upload
                  </p>
                  <input
                    id="fileUpload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {file && (
                    <p className="text-sm text-green-500 mt-2">
                      {file.name} uploaded successfully!
                    </p>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
                >
                  Skip for Now
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthProfile;
