import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import '../app/globals.css';
import Back from '../components/back';

const HowTo = () => {
  return (
    
    <div className="flex flex-col items-center justify-center bg-[#1A202C] min-h-screen p-4">
      <Back/>
      <div className="flex flex-col justify-center bg-gray-800 p-6 rounded-lg shadow-lg mb-6 max-w-xl">
        
        <h1 className="text-3xl text-white mb-6 text-center font-bold">Myths</h1>
        
        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">Ab Exercises Burn Belly Fat</h2>
        <p className="text-white mb-4 text-xl leading-relaxed">
           We cannot spot train body parts. No amount of crunches will give you visible abs. Your body burns fat overall, not just from specific areas. A solid training program combined with a healthy diet is essential. One must maintain a <strong>Caloric Deficit</strong> (burning more calories than consumed) to reduce overall body fat, revealing abdominal definition as the midsection fat decreases.
        </p>
        
        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">More Reps = Better Results</h2>
        <p className="text-white mb-4 text-xl leading-relaxed">
           While higher reps can enhance endurance, they don’t guarantee better fat loss or muscle growth. Focus on maintaining proper form and controlled movements. Strength training with lower reps and heavier weights can also stimulate muscle growth effectively.
        </p>
        
        <h1 className="text-3xl text-white mb-6 text-center font-bold">What Actually Works</h1>
        
        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">Caloric Deficit</h2>
        <p className="text-white mb-4 text-xl leading-relaxed">
           Achieving a caloric deficit is vital for fat loss. Track your daily caloric intake and aim to consume fewer calories than your body expends. Incorporate whole foods—lean proteins, fruits, and vegetables—into your diet while minimizing processed foods for better results.
        </p>
        
        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">Weighted Ab Movements</h2>
        <p className="text-white mb-4 text-xl leading-relaxed">
           Exercises like weighted sit-ups, hanging leg raises, and cable crunches effectively target and strengthen your core. Incorporate progressive overload by gradually increasing weights or resistance to continue challenging your muscles.
        </p>
        
        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">Consistency</h2>
        <p className="text-white mb-4 text-xl leading-relaxed">
           Consistency is key to achieving any fitness goal. Establish a workout routine that you can stick to over the long term. Schedule workouts just like appointments, and find activities you enjoy to keep motivation high.
        </p>
        
        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">Variety in Training</h2>
        <p className="text-white mb-4 text-xl leading-relaxed">
           Incorporate a mix of different exercises to avoid plateaus and keep your workouts engaging. Combine strength training, cardio, and flexibility exercises. High-Intensity Interval Training (HIIT) can also be effective for burning fat and improving cardiovascular fitness.
        </p>
        
        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">Hydration and Recovery</h2>
        <p className="text-white mb-4 text-xl leading-relaxed">
           Staying hydrated is crucial for optimal performance and recovery. Aim for at least 8 glasses of water daily, adjusting based on activity level. Prioritize sleep and rest days, allowing your muscles to recover and grow stronger. Consider incorporating stretching or yoga to enhance flexibility and prevent injury.
        </p>
        
        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">Mental Approach</h2>
        <p className="text-white mb-4 text-xl leading-relaxed">
           Cultivating a positive mindset can significantly impact your fitness journey. Set realistic goals, celebrate small victories, and stay patient. Consider journaling your progress and thoughts to stay motivated and focused.
        </p>
        
        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">Keep Lower Back Flat</h2> 
        <p className="text-white mb-4 text-xl leading-relaxed">
           Maintaining a flat lower back during exercises, especially in movements like squats and deadlifts, helps to prevent strain and injury. Focus on engaging your core and pulling your hips slightly back to keep your spine in a neutral position. This posture ensures effective force transfer and enhances overall stability.
        </p>
        

        <h2 className="text-2xl text-white mb-4 text-center font-semibold p-5">Engage Core</h2> 
        <p className="text-white mb-4 text-xl leading-relaxed">
           Engaging your core is crucial for proper form and stability in nearly all exercises. To engage your core, tighten your abdominal muscles as if preparing for a gentle punch to the stomach. This activation helps protect your spine, enhances balance, and improves your overall performance during workouts.
        </p>

      </div>
    </div>
  );
};

export default HowTo;
