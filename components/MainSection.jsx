"use client"; // This is a client component 👈🏽
import withContainer from '@/hof/hof'
import React, { useRef, useState } from 'react'
import { lofiArray } from '../constants/index.js'

const MainSection = () => {
  const audioRefs = useRef([]);
  const [volumes, setVolumes] = useState(Array(lofiArray.length).fill(0.5));

  const togglePlay = (index) => {
    const audio = audioRefs.current[index];

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const changeVolume = (index, value) => {
    const audio = audioRefs.current[index];
    audio.volume = value;
    const newVolumes = [...volumes];
    newVolumes[index] = value;
    setVolumes(newVolumes);
  };

  return (
    <div className="flex flex-wrap justify-center items-center main_lofi ">
      {lofiArray?.map((item, index) => (
        <div
          key={item.id}
          onClick={() => togglePlay(index)}
          className="m-10 loficard flex flex-col justify-center items-center w-[300px] h-[300px] relative"
        >
          <img
            src={item.pic.src}
            alt="images"
            className="w-full h-full object-cover rounded-2xl cursor-pointer img_main"
          />
          <audio
            ref={(ref) => audioRefs.current[index] = ref}
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
              className="absolute w-24 h-3 bg-blue-200 rounded-full opacity-75 thumb:ring-2 thumb:ring-blue-500 thumb:ring-opacity-75 inp_vol"
              value={volumes[index]}
              onChange={(e) => changeVolume(index, parseFloat(e.target.value))}
            />
        </div>
      ))}
    </div>
  );
}

export default withContainer(MainSection);
