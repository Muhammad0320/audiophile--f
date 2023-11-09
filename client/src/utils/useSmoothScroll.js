import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };

    try {
      window.scrollTo(scrollOptions);
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(scrollOptions.top, scrollOptions.left);
    }
  }, []);
};

export default useSmoothScroll;
