import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function ActiveBulb(props) {
    const [color, setColor] = useState(`rgb(220, 203, 239)`)
    const [brightness, setBrightness] = useState(.6)

    function brightnessDecrement() {
        if ( brightness >= .2 ) {
            setBrightness(prevBrightness => prevBrightness - .1)
        }
    }

    function brightnessIncrement() {
        if ( brightness <= .9 ) {
            setBrightness(prevBrightness => prevBrightness + .1)
        }
    }

    function implementWhite() {
        if ( color !== `rgb(242, 242, 242)`) {
            setColor(`rgb(242, 242, 242)`)
        }
    }

    function implementRed() {
        if ( color !== `rgb(220, 10, 10)`) {
            setColor(`rgb(220, 10, 10)`)
        }
    }

    function implementGreen() {
        if ( color !== `rgb(114, 187, 93)`) {
            setColor(`rgb(114, 187, 93)`)
        }
    }

    function implementYellow() {
        if ( color !== `rgb(253, 240, 78)`) {
            setColor(`rgb(253, 240, 78)`)
        }
    }

    function implementBlue() {
        if ( color !== `rgb(194, 196, 239)`) {
            setColor(`rgb(194, 196, 239)`)
        }
    }

    const bulbColor = {
        color: color
    }

    const bulbOpacity = {
        opacity: brightness
    }

    return <>
                <div className="screenWrapper">
                    <h2 className="bulbHeader">What mood are you feeling today?</h2>
                    <div className="coloursWrapper">
                        <div data-tooltip="Cozy White" onClick={() => implementWhite()} className="white"></div>
                        <div data-tooltip="Motivating Red" onClick={() => implementRed()} className="red"></div>
                        <div data-tooltip="Peaceful Green" onClick={() => implementGreen()} className="green"></div>
                        <div data-tooltip="Royal Yellow" onClick={() => implementYellow()} className="yellow"></div>
                        <div data-tooltip="Icy Blue" onClick={() => implementBlue()} className="blue"></div>
                    </div>
                    <div className="statusWrapper">
                        <FontAwesomeIcon icon={ faPowerOff } onClick={props.powerDown} size="3x" className="powerIconActive" />
                        <FontAwesomeIcon style={{...bulbColor, ...bulbOpacity}} className="bulbIcon" icon={faLightbulb} size="10x" />
                        <FontAwesomeIcon className="activeBulb" icon={ faCheck } size="3x" /> 
                    </div>
                    <p className="connection">Connection status</p>
                    <p className="brightnessHeader">How bright should it be?</p>
                    <div className="brightnessWrapper">
                        <FontAwesomeIcon onClick={() => brightnessDecrement()} className="removeBrightness" icon={ faMinus } size="3x" color="white" />
                        <FontAwesomeIcon onClick={() => brightnessIncrement()} className="addBrightness" icon={ faPlus } size="3x" color="white" />
                    </div>
                </div>
            </>
}