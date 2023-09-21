import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";
import NavigationBar from "./component/NavigationBar";
import About from "./component/About";
import Contact from "./component/Contact";
import Store from "./component/Store";
import Signup from "./forms/Signup";
import SignIn from "./forms/SignIn";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  let time;
  if (spinner) {
    time = setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 6000);
  }
  return (
    !loading && (
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </div>
    )
  );
}

export default App;
