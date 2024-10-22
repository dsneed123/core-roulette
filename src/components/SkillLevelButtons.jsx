"use client"; // Marking this as a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js


const SkillLevelButtons = () => {
  const router = useRouter(); // Initialize the router
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleClick = (level) => {
    setSelectedLevel(level);
    // Navigate to the Workout page
    router.push(`/workout?level=${level}`);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#1A202C]">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col space-y-4">
        <button
          className="w-64 px-6 py-3 text-white bg-blue-800 rounded-lg shadow hover:bg-blue-900 transition duration-200 transform hover:scale-105"
          onClick={() => handleClick('Beginner')}
        >
          Beginner
        </button>
        <button
          className="w-64 px-6 py-3 text-white bg-blue-800 rounded-lg shadow hover:bg-blue-900 transition duration-200 transform hover:scale-105"
          onClick={() => handleClick('Intermediate')}
        >
          Intermediate
        </button>
        <button
          className="w-64 px-6 py-3 text-white bg-blue-800 rounded-lg shadow hover:bg-blue-900 transition duration-200 transform hover:scale-105"
          onClick={() => handleClick('Advanced')}
        >
          Advanced
        </button>
      </div>
      {selectedLevel && <div className="mt-4 text-white">Selected Level: {selectedLevel}</div>}
    </div>
  );
};

export default SkillLevelButtons;
