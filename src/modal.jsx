import React from "react";
import Popup from "reactjs-popup";
import './App.css';

export default () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
);
