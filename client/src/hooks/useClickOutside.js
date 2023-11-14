import { useEffect, useRef } from "react";

export const useClickOutside = (close, listenCapturing = true) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) close();
    };

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [close, listenCapturing]);

  return { ref };
};
