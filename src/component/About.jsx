import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";

function About() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div id={theme}>
      <p>jhdhdhs</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default About;
