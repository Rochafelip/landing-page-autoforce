// src/hooks/useResponsiveGroupSize.js
import { useEffect, useState } from 'react';

export default function useResponsiveGroupSize() {
  const [groupSize, setGroupSize] = useState(window.innerWidth < 768 ? 1 : 4);

  useEffect(() => {
    const handleResize = () => {
      setGroupSize(window.innerWidth < 768 ? 1 : 4);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return groupSize;
}
