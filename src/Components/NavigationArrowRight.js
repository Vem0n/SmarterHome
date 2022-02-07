import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function NavigationArrowRight() {
    return <>
        <div className="navArrow">
            <FontAwesomeIcon icon={faAngleDoubleRight} size="4x" color="rgb(206, 183, 233)" />
        </div>
    </>
}