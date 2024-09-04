import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-t-transparent border-blue-600"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
