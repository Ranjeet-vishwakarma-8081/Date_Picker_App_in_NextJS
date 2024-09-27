import React from "react";
import DatePicker from "../components/DatePicker";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-2xl font-bold text-gray-800 mb-6 text-center">
          <span className="text-purple-600">Ranjeet Vishwakarma </span>
          <br /> <span>Recurring Date Picker App</span>
        </div>
        <DatePicker />
      </div>
    </div>
  );
}
