import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug, faTimes, faCheck, faPowerOff, faTv, faGamepad, faRobot } from "@fortawesome/free-solid-svg-icons";

export default function HandyOutletScreen() {
    const [status, setStatus] = useState("Inactive")
    const [power, setPower] = useState(1800)
    const [tvStatus, setTvStatus] = useState("Inactive")
    const [consoleStatus, setConsoleStatus] = useState("Inactive")
    const [droidStatus, setDroidStatus] = useState("Inactive")

    function statusClickHandler() {
        if (status === "Inactive") {
            setStatus("Active")
        } else if (status === "Active") {
            setStatus("Inactive")
        }
    }

    function tvStatusHandler() {
        if (tvStatus !== "Active") {
            setPower(prevPower => prevPower + 24)
            setTvStatus("Active")
        } else if (tvStatus === "Active") {
            setTvStatus("Inactive")
            setPower(prevPower => prevPower - 24)
        }
    }

    function consoleStatusHandler() {
        if (consoleStatus !== "Active") {
            setPower(prevPower => prevPower + 90)
            setConsoleStatus("Active")
        } else if (consoleStatus === "Active") {
            setConsoleStatus("Inactive")
            setPower(prevPower => prevPower - 90)
        }
    }

    function droidStatusHandler() {
        if (droidStatus !== "Active") {
            setPower(prevPower => prevPower + 320)
            setDroidStatus("Active")
        } else if (droidStatus === "Active") {
            setDroidStatus("Inactive")
            setPower(prevPower => prevPower - 320)
        }
    }


    if (status === "Inactive") {
        return (
            <>
                <div className="screenWrapper">
                    <div className="powerStatusWrapper">
                        <FontAwesomeIcon className="powerIconInactive2" onClick={() => statusClickHandler()} icon={ faPowerOff } size="4x" />
                        <FontAwesomeIcon icon={ faTimes } className="inactiveOutlet" size="4x" />
                    </div>
                    <FontAwesomeIcon icon={ faPlug } className="outletIcon" size="8x" />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="screenWrapper">
                    <h1 className="outletDevicesHeader">Connected devices</h1>
                    <div className="connectedDevicesWrapper">
                        <div className="tvWrapper">
                            <FontAwesomeIcon onClick={() => tvStatusHandler()} className="tvIcon" icon={ faTv } size="3x" />
                            <p className="status">{tvStatus}</p>
                        </div>
                        <div className="gamepadWrapper">
                            <FontAwesomeIcon onClick={() => consoleStatusHandler()} className="consoleIcon" icon={ faGamepad } size="3x" />
                            <p className="status">{consoleStatus}</p>
                        </div>
                        <div className="robotWrapper">
                            <FontAwesomeIcon onClick={() => droidStatusHandler()} className="droidIcon" icon={ faRobot } size="3x" />
                            <p className="status">{droidStatus}</p>
                        </div>
                    </div>
                    <div className="powerStatusWrapper">
                        <FontAwesomeIcon className="powerIconActive2" onClick={() => statusClickHandler()} icon={ faPowerOff } size="4x" />
                        <FontAwesomeIcon icon={ faCheck } className="activeOutlet" size="3x" />
                    </div>
                    <FontAwesomeIcon icon={ faPlug } className="outletIcon" size="8x" />
                    <p className="connectionOutlet">Connection Status</p>
                    <p className="outletHeader">Power Consumption</p>
                    <p className="powerConsumption">{power} Watts</p>
                </div>
            </>
        )
    }
}