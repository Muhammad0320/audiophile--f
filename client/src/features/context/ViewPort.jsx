import { createContext, useEffect, useState } from "react";

const ViewPortContext = createContext();

export function ViewPortProvider({ children }) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  console.log(viewportWidth);

  return (
    <ViewPortContext.Provider value={{ viewportWidth, setViewportWidth }}>
      {" "}
      {children}{" "}
    </ViewPortContext.Provider>
  );
}
