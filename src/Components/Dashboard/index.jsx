import React from "react";
import { Lights } from "../Lights";
import { Climate } from "../Climate";
import { Blinds } from "../Blinds";
import { Energy } from "../Energy";
import "./style.css";

export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data.lights} />
      <Climate
        temperature={data.climate.temperature}
        humidity={data.climate.humidity}
      />
      <Blinds blinds={data.blinds} />
      <Energy
        electricity={data.energyConsumption.electricity}
        water={data.energyConsumption.water}
      />
    </main>
  );
};
