import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
 const [themeCSS, setThemeCSS] = useState("/css/dark.css")


 useEffect(() => {
    const mode = localStorage.getItem("theme");
    if(mode==="light"){
        setThemeCSS("/css/light.css")
    }else {
       setThemeCSS("/css/dark.css")
    }
 },[])

  return (
    <GlobalContext.Provider value={{ themeCSS, setThemeCSS }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
