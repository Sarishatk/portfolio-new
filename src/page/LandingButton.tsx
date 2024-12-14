import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingButton.css';

interface MousePosition {
  x: number;
  y: number;
}

function LandingButton() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [showCircle, setShowCircle] = useState<boolean>(true);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      navigator.vibrate?.(200);
      navigate('/home');
    }, 400);
  };

  const handleShow = () => {
    setShowCircle(!showCircle);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };


  return (
    <div className="d-flex w-100 vh-100 landing-btn-bg" onMouseMove={handleMouseMove}>
      <div className="m-3 circle-container w-100 rounded d-flex align-items-center justify-content-center">
        <button onMouseEnter={handleShow} onMouseLeave={handleShow} onClick={handleClick} className="landing-button">
          <span>Click Me</span>
        </button>
        {animate && <div className="circle"></div>}
        {showCircle && (
          <div
            className="torch"
            style={{
              top: mousePosition.y - 50,
              left: mousePosition.x - 50,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default LandingButton;
