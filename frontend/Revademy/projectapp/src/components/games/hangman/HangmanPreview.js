import React, { useRef, useEffect, useState } from 'react';
import hangmanVid from '../gamevids/Hangman.mp4';


function HangmanPreview() {
  
  const [videoPreview, setVideoPreview] = useState(true);

    const vidRef = useRef();
    const handlePlayVideo = () => {
    vidRef.current.play();
    setVideoPreview();
  }

  useEffect(() => {
    handlePlayVideo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <video ref= {vidRef} width="750" height="500" controls >
      <source src={ hangmanVid } type="video/mp4" />
    </video>
  )
}

export default HangmanPreview;