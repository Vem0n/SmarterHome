import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

export default function NewProduct() {
    return (
        <>
            <div className="screenWrapper">
                <h1 className="newHeader">No new products available</h1>
                <FontAwesomeIcon icon={faFrown} size="8x" color="grey" />
                <h2 className="newHeader2">Come back later!</h2>
            </div>
        </>
    )
}