import React, { useState } from "react";
import LightOffImage from "../../images/light-off.svg";
import LightOnImage from "../../images/light-on.svg";
import "./style.css";

export const Light = ({ name, state }) => {
  const [lightState, setLightState] = useState(state);
  return (
    <div
      className="light"
      onClick={() =>
        lightState === "on" ? setLightState("off") : setLightState("on")
      }
    >
      <div className="light__icon">
        {lightState === "off" ? (
          <img src={LightOffImage} />
        ) : (
          <img src={LightOnImage} />
        )}
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};
