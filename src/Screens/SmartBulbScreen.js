import React, {useState} from "react";
import ActiveBulb from "../Components/ActiveBulb";
import InactiveBulb from "../Components/InactiveBulb";

export default function SmartBulbScreen() {
    const [powerState, setPowerState] = useState("Active")

    function powerHandler() {
        if ( powerState === "Active") {
            setPowerState("Inactive")
        } else if ( powerState === "Inactive") {
            setPowerState("Active")
        }
    }

    if ( powerState === "Active") {
        return (
        <>
            <ActiveBulb powerDown={() => powerHandler()} />
        </>
        )
    } else {
        return <InactiveBulb powerUp={() => powerHandler()} />
    }
}