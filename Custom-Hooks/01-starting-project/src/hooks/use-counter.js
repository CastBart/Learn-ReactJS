import { useEffect, useState } from "react";

const useCounter = (countAmount) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + countAmount);
    }, 1000);

    return () => clearInterval(interval);
  }, [countAmount]);

  return counter;
};

export default useCounter;
