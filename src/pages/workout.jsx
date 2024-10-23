"use client"; // Marking this as a Client Component


import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'app/globals.css';
import Back from '../components/back';

const Workout = () => {
  const router = useRouter();
  var { level } = router.query;
  console.log(level);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const allGifs = [
    { src: './media//beginner/Alternating-Heel-Touches.gif', name: 'Alternating Heel Touches', instruction: 'Lie on your back, lift your feet, and touch your heels alternately.' },
    { src: './media//beginner/Alternating-Oblique-Crunches.gif', name: 'Alternating Oblique Crunches', instruction: 'Crunch towards your knee while extending the other leg.' },
    { src: './media//beginner/Bicycle-Crunch.gif', name: 'Bicycle Crunch', instruction: 'Alternate touching your elbows to the opposite knees in a cycling motion.' },
    { src: './media//beginner/Crunch.gif', name: 'Crunch', instruction: 'Lie on your back, knees bent, and lift your torso towards your knees.' },
    { src: './media//beginner/Dead-Bug.gif', name: 'Dead Bug', instruction: 'Lie on your back with arms and legs up, lower opposite arm and leg.' },
    { src: './media//beginner/Elbow-To-Knee-Situp.gif', name: 'Elbow to Knee Situp', instruction: 'Sit up and touch your elbow to the opposite knee.' },
    { src: './media//beginner/lying-leg-raise.gif', name: 'Lying Leg Raise', instruction: 'Lie flat and lift your legs up while keeping them straight.' },
    { src: './media//beginner/Oblique-Crunches.gif', name: 'Oblique Crunches', instruction: 'Lie on your back and lift your shoulders towards your knees to one side.' },
    { src: './media//beginner/Reverse-Crunch.gif', name: 'Reverse Crunch', instruction: 'Lift your hips off the ground while bringing your knees to your chest.' },
    { src: './media/intermediate/Band-Assisted-Wheel-Rollouts.gif', name: 'Band-Assisted Wheel Rollouts', instruction: 'Kneel and roll a wheel away from you while keeping your core tight.' },
    { src: './media/intermediate/Bicycle-Crunch.gif', name: 'Bicycle Crunch (Inter./media/te)', instruction: 'Perform a bicycle crunch, focusing on your core and controlling the movement.' },
    { src: './media/intermediate/Captains-Chair-Leg-Raises.gif', name: 'Captain’s Chair Leg Raises', instruction: 'Use a captain’s chair and lift your legs to engage your abs.' },
    { src: './media/intermediate/Decline-Weighted-Situp.gif', name: 'Decline Weighted Situp', instruction: 'Perform a situp on a decline bench with added weight for resistance.' },
    { src: './media/intermediate/Hanging-Flutter-Kicks.gif', name: 'Hanging Flutter Kicks', instruction: 'Hang from a bar and alternate kicking your legs up and down.' },
    { src: './media/intermediate/Hanging-Knee-Raises.gif', name: 'Hanging Knee Raises', instruction: 'Hang from a bar and bring your knees towards your chest.' },
    { src: './media/intermediate/lying-leg-raise.gif', name: 'Lying Leg Raise (Inter./media/te)', instruction: 'Lie flat and raise your legs, keeping them straight to work your lower abs.' },
    { src: './media/intermediate/Russian-Twists.gif', name: 'Russian Twists', instruction: 'Sit on the floor, lean back slightly, and twist your torso side to side.' },
    { src: './media/intermediate/Weighted-Crunch.gif', name: 'Weighted Crunch', instruction: 'Perform a crunch while holding a weight plate for added resistance.' },
    { src: './media/intermediate/Weighted-Knee-Raises-Captains-Chair.gif', name: 'Weighted Knee Raises (Captain’s Chair)', instruction: 'Use a captain’s chair and lift your knees while holding weights.' },
    { src: './media//advanced/Hanging-Flutter-Kicks.gif', name: 'Hanging Flutter Kicks (Advanced)', instruction: 'Perform flutter kicks while hanging from a bar for extra core engagement.' },
    { src: './media//advanced/Hanging-Half-Windmill.gif', name: 'Hanging Half Windmill', instruction: 'Hang from a bar and rotate your legs in a half-circle motion.' },
    { src: './media//advanced/Russian-Twists.gif', name: 'Russian Twists (Advanced)', instruction: 'With added weight, perform twists to engage the obliques deeply.' },
    { src: './media//advanced/Weighted-Crunch.gif', name: 'Weighted Crunch (Advanced)', instruction: 'Perform crunches with a heavier weight for increased resistance.' },
    { src: './media//advanced/Weighted-Decline-Situp.gif', name: 'Weighted Decline Situp', instruction: 'On a decline bench, perform situps with added weight for challenge.' },
    { src: './media//advanced/Weighted-Knee-Raises-Captains-Chair.gif', name: 'Weighted Knee Raises (Captain’s Chair Advanced)', instruction: 'Lift knees to chest while holding weights on a captain’s chair.' },
    { src: './media//advanced/Weighted-Knee-Raises-Hanging.gif', name: 'Weighted Knee Raises (Hanging)', instruction: 'Hang and lift knees towards your chest while holding weights.' },
    { src: './media//advanced/Weighted-Seated-Tuck-Crunch.gif', name: 'Weighted Seated Tuck Crunch', instruction: 'Sit with weights and bring your knees to your chest while crunching.' },
    { src: './media//advanced/Wheel-Rollout.gif', name: 'Wheel Rollout', instruction: 'Use a wheel to roll forward while keeping your body straight and engaging your core.' },
  ];
  
    // Function to filter GIFs based on level
    const getImagesByLevel = (level) => {
      if (!level) return [];
      return allGifs.filter(gif => gif.src.split('/')[2] === level.toLowerCase());
    };
  
    const getRandomImages = (filteredImages) => {
      const count = level === 'Advanced' ? 3 : 2; // Set number of images based on level
      const shuffledGifs = filteredImages.sort(() => 0.5 - Math.random());
      return shuffledGifs.slice(0, Math.min(count, shuffledGifs.length)); // Ensure we don't exceed available images
    };
  
    const handleReRoll = () => {
      if (images.length === 0) return;
      setLoading(true);
      const selectedImages = getRandomImages(images);
      setImages(selectedImages);
      setLoading(false);
    };
  
    useEffect(() => {
      if (level) {
        const filteredImages = getImagesByLevel(level);
        setImages(getRandomImages(filteredImages)); // Set random images on load
      }
    }, [level]);
    console.log(images);
    return (
      
      <div className="flex flex-col items-center justify-center bg-[#1A202C] min-h-screen p-4">
       <Back/>
       <div className="flex items-center mb-8">
       
      </div>
        
        <div className="flex flex-col justify-center bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
       
          <h1 className="text-2xl text-white mb-4">Rules</h1>
          <p className="text-white mb-2">• Complete 2-3 rounds</p>
          <p className="text-white mb-2">• Rest 45 seconds between rounds</p>
          <p className="text-white">• Progressively overload and add weight each week</p>
        </div>
  
        <div className="grid grid-cols-1 gap-4">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg text-center p-4 flex flex-col">
                <img
                  src={image.src}
                  alt={`Workout GIF ${index + 1}`}
                  className="w-full h-auto max-w-xs mx-auto"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/path/to/default/image.gif';
                  }}
                />
                <p className="text-white mt-2 text-sm">{image.name}</p>
                <p className="text-white mt-1 text-xs break-words">{image.instruction}</p>
              </div>
            ))
          ) : (
            <p className="text-white">No GIFs available for this level.</p>
          )}
        </div>
        <button 
          onClick={handleReRoll} 
          className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Loading...' : 'Re-Roll'}
        </button>
      </div>
    );
  };
  
  export default Workout;