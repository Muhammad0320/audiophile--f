import { createContext, useContext, useEffect, useState } from "react";

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
    <ViewPortContext.Provider value={{ viewportWidth }}>
      {" "}
      {children}{" "}
    </ViewPortContext.Provider>
  );
}

export const useViewport = () => {
  const context = useContext(ViewPortContext);

  if (!context)
    throw new Error("Viewport context was used outside viewport provider");

  return context;
};
