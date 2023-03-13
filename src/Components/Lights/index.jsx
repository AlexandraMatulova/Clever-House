import React from "react";
import { Light } from "../Light";
import "./style.css";

export const Lights = ({ lights }) => {
  return (
    <>
      {lights.map((light) => (
        <Light key={light.name} name={light.name} state={light.state} />
      ))}
    </>
  );
};
