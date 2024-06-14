"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeLogger = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log("Current theme:", theme);
    const storedTheme = localStorage.getItem("theme");
    console.log("Stored theme in localStorage:", storedTheme);
    if (storedTheme === null) {
      console.log("Setting initial theme to dark");
      setTheme("dark");
    }
  }, [theme, setTheme]);

  return null;
};

export default ThemeLogger;
