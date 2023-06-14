"use client"; // This is a client component 👈🏽
import withContainer from '@/hof/hof';
import React, { useEffect, useState } from 'react';
import { TbBrandNeteaseMusic } from 'react-icons/tb';
import { FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { GiTomato } from 'react-icons/gi';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { LuTimerReset } from 'react-icons/lu';
import { RiTodoLine } from 'react-icons/ri'
import { Button, Modal } from 'antd';

const Navbar = () => {
  const [pomotimer, setPomodoroTimer] = useState(0);
  const [showTomato, setShowTomato] = useState(true);
  const [play, setPlay] = useState(false);
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState('');



  // timer logic
  useEffect(() => {
    let timerId;

    if (pomotimer > 0 && play) {
      timerId = setTimeout(() => {
        setPomodoroTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (pomotimer === 0) {
      setShowTomato(true);
    }

    return () => clearTimeout(timerId);
  }, [pomotimer, play]);

  const handlePomo = () => {
    if (play) {
      setPlay(false);
      return;
    }
  
    if (pomotimer === 0) {
      setPomodoroTimer(25 * 60); // 25 minutes in seconds
      setShowTomato(false);
    }
  
    setPlay(true);
  };
  

  const handleReset = () => {
    setPomodoroTimer(0);
    setShowTomato(true);
    setPlay(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };



  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };




  return (
    <div className="w-[100%] h-[60px] flex justify-between items-center navbar">
      {/* logo */}
      <div className="logo flex justify-between items-center ml-5">
        <div className="logo_icon">
          <TbBrandNeteaseMusic className="icon_lofi" />
        </div>
        <div className="logo_text text-slate-300 text-[1.2rem] ml-2">lofi.dev</div>
      </div>

      <div className="pomodoro_note flex items-center">
        {showTomato ? (
          <div className="tomato cursor-pointer" onClick={handlePomo}>
            <GiTomato className="tomato_main text-red-500" />
          </div>
        ) : (
          <div className="timer">
            <span className="timer_text">{formatTime(pomotimer)}</span>
            <div className="flex mt-2">
              <div className="playpause" onClick={handlePomo}>
                {play ? (
                  <AiOutlinePauseCircle className="text-slate-200 cursor-pointer" />
                ) : (
                  <AiOutlinePlayCircle className="text-slate-200 cursor-pointer" />
                )}
              </div>
              <div className="reset ml-4" onClick={handleReset}>
                <LuTimerReset className="text-slate-200 cursor-pointer" />
              </div>
            </div>
          </div>
        )}


        <div className="notes cursor-pointer ml-2 text-center flex justify-center items-center" onClick={() => setOpen(true)}>
            <RiTodoLine className='text-white ml-2'/>
        </div>

            <Modal
            title=""
            centered
            open={open}
            onCancel={() => setOpen(false)}
            width={300}
            className='todomodel'
        >
            <textarea
                className="notes-textarea bg-transparent"
                placeholder="Enter your notes..."
                value={notes}
                onChange={handleNotesChange}
            />
        </Modal>
      </div>

      {/* social media priyansh*/}
      <div className="social flex">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/priyansh-sharma-7b9520223/" target="_blank" rel="noferrer">
            <FaLinkedin className="text-white social_link hover:text-blue-500" />
          </a>
        </div>
        <div className="ig ml-4">
          <a href="https://www.youtube.com/channel/UCLcOtm-lXx6m78eKB7DiY3Q" target="_blank" rel="noferrer">
            <FaYoutube className="text-white social_link hover:text-red-500" />
          </a>
        </div>
        <div className="youtube ml-4">
          <a  href="https://www.instagram.com/mindbodyps/" target="_blank" rel="noferrer">
            <FaInstagram className="text-white social_link hover:text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default withContainer(Navbar);
