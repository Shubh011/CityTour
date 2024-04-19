import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Data from "./Data";
import Sidedata from "./Sidedata";
import Post from "./components/Post";

function App() {
  const [bgColor, setbgColor] = useState("#232D3f");
  const [color, setColor] = useState("white");
  const [toggle, setToggle] = useState(true);
  const toggleButton = () => {
    setToggle(!toggle);
    if (toggle) {
      setbgColor("rgb(255,255,255");
      setColor("black");
      document.querySelector("body").style.backgroundColor = "#cbc5c5";
    } else {
      setbgColor("#232D3f");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "black";
    }
  };
  return (
    <div>
      <Navbar
        bgColor={bgColor}
        color={color}
        toggleButton={toggleButton}
        toggle={toggle}
      />
      <div className="container">
        <div className="side_bar">
          <Sidebar bgColor={bgColor} color={color} />
        </div>

        <div className="post_section">
          {Data.map((d) => (
            <Post key={d.id} data={d} bgColor={bgColor} color={color} />
          ))}
        </div>

        <div className="right_bar">
          {Sidedata.map((d) => (
            <Rightbar key={d.id} data={d} bgColor={bgColor} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
