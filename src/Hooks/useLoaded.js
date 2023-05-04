import { useState, useEffect } from 'react';

const useLoaded = (key, dependencies) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (key) {
      setIsLoaded(true);
    }
  }, dependencies);
  return isLoaded;
};

export default useLoaded;
