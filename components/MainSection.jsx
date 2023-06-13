"use client"; // This is a client component 👈🏽
import withContainer from '@/hof/hof';
import React, { useRef, useState } from 'react';
import { lofiArray } from '../constants/index.js';


const MainSection = () => {
  const audioRefs = useRef([]);
  const [volumes, setVolumes] = useState(Array(lofiArray.length).fill(0.5));
  const [activeCards, setActiveCards] = useState([]);

  const togglePlay = (index) => {
    const audio = audioRefs.current[index];

    if (audio.paused) {
      audio.play();
      setActiveCards([...activeCards, index]);
    } else {
      audio.pause();
      setActiveCards(activeCards.filter((cardIndex) => cardIndex !== index));
    }
  };

  const changeVolume = (index, value) => {
    const audio = audioRefs.current[index];
    audio.volume = value;
    const newVolumes = [...volumes];
    newVolumes[index] = value;
    setVolumes(newVolumes);
  };

  const handleVolumeClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="flex flex-wrap justify-center items-center main_lofi ">
      {lofiArray?.map((item, index) => (
        <div
          key={item.id}
          meratitle={item.title}
          onClick={() => togglePlay(index)}
          className={`m-10 loficard flex flex-col justify-center items-center w-[300px] h-[300px] relative ${
            activeCards.includes(index) ? `active${index}` : ''
          }`}
        >
          <img
            src={item.pic}
            alt="images"
            className="w-full h-full object-cover rounded-2xl cursor-pointer img_main"
          />
          <audio
            ref={(ref) => (audioRefs.current[index] = ref)}
            src={item.music}
            loop
            onPause={() => console.log(`Audio ${index} paused`)}
            onEnded={() => console.log(`Audio ${index} ended`)}
          />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            className="absolute custom-range"
            value={volumes[index]}
            onChange={(e) => changeVolume(index, parseFloat(e.target.value))}
            onClick={handleVolumeClick}
          />
        </div>
      ))}
    </div>
  );
};

export default withContainer(MainSection);
