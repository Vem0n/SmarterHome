import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function InactiveBulb(props) {
    return (
        <>
            <div className="screenWrapper">
                <div className="statusWrapper">
                    <FontAwesomeIcon icon={ faPowerOff } onClick={props.powerUp} size="3x" className="powerIconInactive" />
                    <FontAwesomeIcon style={{opacity: .3}} className="bulbIcon" icon={faLightbulb} size="10x" />
                    <FontAwesomeIcon className="inactiveBulb" icon={ faTimes } size="3x" /> 
                </div>
                <p className="connection">Connection status</p>
            </div>
        </>
    )
}