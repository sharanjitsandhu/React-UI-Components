import React from "react";
import "./Button.css";

function ActionButton() {
  return (
    <div className="action-buttons">
      <div>
        <i class="fa fa-divide button" />
      </div>
      <div>
        <i class="fa fa-times button" />
      </div>
      <div>
        <i class="fa fa-minus button" />
      </div>
      <div>
        <i class="fa fa-plus button" />
      </div>
      <div>
        <i class="fa fa-equals button" />
      </div>
    </div>
  );
}

export default ActionButton;
