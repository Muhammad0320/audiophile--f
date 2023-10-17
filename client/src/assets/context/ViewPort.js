import { createContext, useEffect, useState } from "react";

const ViewPortContext = createContext();

function ViewPort({ children }) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewPortContext.Provider value={{ viewportWidth }}>
      {" "}
      {children}{" "}
    </ViewPortContext.Provider>
  );
}

export default ViewPort;
