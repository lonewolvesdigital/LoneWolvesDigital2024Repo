/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const DarkTheme = ({ children, useSkin, mobileappstyle }) => {
  const [themeCss, setThemeCss] = React.useState("");

  React.useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setThemeCss(isDarkMode ? "/css/dark.css" : "/css/light.css");
  }, []);

  return (
    <>
      <Head>
        {themeCss && <link rel="stylesheet" href={themeCss} />}
        {useSkin && <link rel="stylesheet" href="/css/arch-skin-dark.css" />}
        {mobileappstyle && <link href="/css/mobile-app-dark.css" rel="stylesheet" />}
      </Head>
      {children}
    </>
  );
};

export default DarkTheme;
