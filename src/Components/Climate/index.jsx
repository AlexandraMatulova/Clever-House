import React, { useState } from "react";
import "./style.css";
import Temp from "../../images/temp.svg";

export const Climate = ({ temperature, humidity }) => {
  const [roomTemperature, setRoomTemperature] = useState(temperature);
  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={Temp} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{roomTemperature}°C</div>
        <div className="climate__humidity">Vlhkost vzduchu: {humidity}%</div>
      </div>
      <div className="climate__controls">
        <button
          className="button"
          onClick={() => setRoomTemperature(roomTemperature + 1)}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => setRoomTemperature(roomTemperature - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};
