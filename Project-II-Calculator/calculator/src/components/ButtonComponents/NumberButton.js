import React from "react";
import "./Button.css";

function NumberButton() {
  return (
    <div>
      <div className="number-button">
        <div className="clear">clear</div>
        <div className="number">
          <div className="numbers">7</div>
          <div className="numbers">8</div>
          <div className="numbers">9</div>
        </div>
        <div className="number">
          <div className="numbers">4</div>
          <div className="numbers">5</div>
          <div className="numbers">6</div>
        </div>
        <div className="number">
          <div className="numbers">1</div>
          <div className="numbers">2</div>
          <div className="numbers">3</div>
        </div>
        <div className="zero">0</div>
      </div>
    </div>
  );
}

export default NumberButton;
