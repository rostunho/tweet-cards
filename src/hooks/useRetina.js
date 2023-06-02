import { useState, useEffect } from 'react';

export function useRetina() {
  const [isRetina, setIsRetina] = useState(false);

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio;

    pixelRatio > 1 ? setIsRetina(true) : setIsRetina(false);
  }, []);

  return isRetina;
}
