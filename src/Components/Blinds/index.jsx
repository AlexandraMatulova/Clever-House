import React, { useState } from "react";
import "./style.css";
import BlindsClosed from "../../images/blinds-closed.svg";
import BlindsOpen from "../../images/blinds-open.svg";

export const Blinds = ({ state }) => {
  const [blindsState, setBlindsState] = useState(state);
  return (
    <div className="blinds">
      <div className="blinds__icon">
        {blindsState === "open" ? (
          <img src={BlindsOpen} />
        ) : (
          <img src={BlindsClosed} />
        )}
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        {blindsState === "open" ? (
          <>
            <button className="button button--active" onClick={() => setBlindsState("open")}>
              Otevřeno
            </button>
            <button
              className="button"
              onClick={() => setBlindsState("close")}
            >
              Zavřeno
            </button>
          </>
        ) : (
          <>
            <button
              className="button"
              onClick={() => setBlindsState("open")}
            >
              Otevřeno
            </button>
            <button className="button button--active" onClick={() => setBlindsState("close")}>
              Zavřeno
            </button>
          </>
        )}
      </div>
    </div>
  );
};
