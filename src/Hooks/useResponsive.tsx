import { useState, useEffect } from 'react';

interface ResponsiveHookProps {
  initialState: boolean;
  setIs: any;
  widthThreshold: number;
}

const useResponsive = ({ initialState, setIs, widthThreshold }: ResponsiveHookProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBoolean, setIsBoolean] = useState<boolean>(initialState);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < widthThreshold && isBoolean) {
      setIs(false);
      setIsBoolean(false);
    } else if (windowWidth >= widthThreshold && !isBoolean) {
      setIs(true);
      setIsBoolean(true);
    }
  }, [windowWidth, isBoolean, setIs, widthThreshold]);

  return { windowWidth, isBoolean, setIsBoolean };
};

export default useResponsive;
