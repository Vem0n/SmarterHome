import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {

    return (
        <>
            <div className="navbarWrapper">
                <h2 className="navbarHeader">Your products</h2>
                <ul className="navbarList">
                    <li className="navbarListElement">
                        <a href="#" onClick={props.bulb} className="navbarListElementLink" >
                            <FontAwesomeIcon className="navElementIcon" icon={ faLightbulb } size="4x" />
                            <span className="linkText">Smart Bulb</span>
                        </a>
                    </li>
                    <li className="navbarListElement">
                        <a href="#" onClick={props.outlet} className="navbarListElementLink">
                            <FontAwesomeIcon className="navElementIcon" icon={ faPlug } size="4x" />
                            <span className="linkText">Handy Outlet</span>
                        </a>
                    </li>
                    <li className="navbarListElement" >
                        <a href="#" onClick={props.temperature} className="navbarListElementLink">
                            <FontAwesomeIcon className="navElementIcon" icon={ faThermometerHalf } size="4x" />
                            <span className="linkText">Temperature Monitor</span>
                        </a>
                    </li>
                    <li className="navbarListElement">
                        <a href="#" onClick={props.newProduct} className="navbarListElementLink">
                            <FontAwesomeIcon className="navElementIcon" icon={ faPlusCircle } size="4x" />
                            <span className="linkText">New Device</span>
                        </a>
                    </li>
                    <li className="navbarListElement">
                        <a href="#" onClick={props.home} className="navbarListElementLink">
                            <FontAwesomeIcon className="navElementIcon" icon={ faHome } size="4x" />
                            <span className="linkText">Home Screen</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}