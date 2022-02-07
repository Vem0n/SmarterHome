import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export default function HomeScreen() {
    return (
        <>
            <div className="welcomeScreen">
                <h1 className="welcomeText">Welcome</h1>
                <FontAwesomeIcon icon={faHome} color="rgb(206, 183, 233)" size="8x" />
            </div>
        </>
    )
}