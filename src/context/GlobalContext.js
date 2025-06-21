import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
 const [themeCSS, setThemeCSS] = useState("/css/dark.css")

 // Always default to dark mode unless user explicitly toggles to light
 useEffect(() => {
    const mode = localStorage.getItem("theme");
    if(mode === "light"){
        setThemeCSS("/css/light.css")
    } else {
        setThemeCSS("/css/dark.css")
        localStorage.setItem("theme", "dark"); // force dark as default
    }
 },[])

  return (
    <GlobalContext.Provider value={{ themeCSS, setThemeCSS }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
