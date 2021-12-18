import React from "react";
import "./home.css";
import { useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  return (
    <div className="backroundOfHomepage">
      <button onClick={onClick} type="button" className="introLine">
        {showText ? <Text /> : null}
        GENIUS
      </button>
    </div>
  );
}

const Text = () => (
  <div class="container">
    <div class="box"></div>
    <div class="box overlay"></div>
    Hello
  </div>
);
