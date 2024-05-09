import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        My dear Rakshasi 🧛‍♀️😈,
        Happy birthday, My Love❤️.
        Keep smiling all the time. Nvu anukunavi anii jaragali jaruguthayi. You will achieve your goals and I will always be there for you. Wishing you a good health and God bless you raa. And one last and important thing koncham over anukoku 😅 but yeah. If you are seetha I will be your ram, if you are Taani I will be your Surinder Sahni,if you are yashna I will be your viraj. Finally , If you are DR. RESHMA SAHITHI DANGETI I will be your SYAM PRAKASH RAJ VEMURI ❤️😁. Love you raa Bngru thalli 😘. 

        With lots of lots of lots of love 💕 
        Ni SYAM PRAKASH RAJ VEMURI.
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
