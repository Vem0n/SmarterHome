import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerQuarter } from "@fortawesome/free-solid-svg-icons";

export default function TemperatureMonitorScreen() {
    return (
        <>
            <div className="screenWrapper">
                <h1 className="temperatureHeader">It's quite chilly!</h1>
                <FontAwesomeIcon icon={faThermometerQuarter} color="white" size="8x" />
                <p className="connection">Connection status</p>
                <p className="temperatureHeader2">Current temperature is</p>
                <p className="temperatureHeader3">6 Celsius</p>
            </div>
        </>
    )
}