// hooks/useMobileDetect.js
import { useEffect, useState } from 'react';

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if the screen width is 768px or less
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener
    };
  }, []);

  return isMobile;
};

export default useMobileDetect;
