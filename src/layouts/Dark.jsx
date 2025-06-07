/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import { useGlobalContext } from "../context/GlobalContext";

const DarkTheme = ({ children, useSkin, mobileappstyle }) => {
const {setThemeCSS, themeCSS} = useGlobalContext()
  React.useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setThemeCSS(isDarkMode ? "/css/dark.css" : "/css/light.css");
    if(isDarkMode){
      localStorage.setItem("themeMode", "dark")
    } else {
      localStorage.setItem("themeMode", "light")
    }
  }, []);

  return (
    <>
      <Head>
        {themeCSS && <link rel="stylesheet" href={themeCSS} />}
        {useSkin && <link rel="stylesheet" href="/css/arch-skin-dark.css" />}
        {mobileappstyle && <link href="/css/mobile-app-dark.css" rel="stylesheet" />}
      </Head>
      {children}
    </>
  );
};

export default DarkTheme;
