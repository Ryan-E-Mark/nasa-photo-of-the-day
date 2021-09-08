import React, { useState, useEffect } from "react";

export default function Card(props) {
    const { nasaData } = props;
    return (
        <div>
            <h1>{nasaData.title}</h1>
            <p>{nasaData.date}</p>
            <img src={nasaData.url} alt="NASA Astronomy Photo of the Day"></img>
            <p><span>What are we looking at?: </span>{nasaData.explanation}</p>
        </div>
    )
}