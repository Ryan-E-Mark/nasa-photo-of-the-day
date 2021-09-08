import React, { useState, useEffect } from "react";

export default function Card(props) {
    const { spaceImg, title, info, date } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <img src={spaceImg} alt="NASA Astronomy Photo of the Day"></img>
            <p><span>What are we looking at?: </span>{info}</p>
        </div>
    )
}