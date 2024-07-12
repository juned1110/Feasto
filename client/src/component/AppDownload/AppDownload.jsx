import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <React.Fragment>
      <div className="app-download" id="app-download">
        <p>
          For Better Experience Download <br />
          Feasto App
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppDownload;
