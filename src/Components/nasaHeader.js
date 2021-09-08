import React, { useState, useEffect } from "react";

export default function Header() {

    return (
        <nav className="nav-bar">
            <div className="header-container">
                <h2>Astronomy Photo of the Day!</h2>
            </div>
            <div className="header-container2">
                <a href="https://www.nasa.gov/" target="_blank">Nasa Homepage</a>
            </div>
        </nav>
        
    )
}