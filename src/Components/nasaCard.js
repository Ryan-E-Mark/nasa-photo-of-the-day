import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    
    h1 {
        font-size: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 1.6rem;
    }
`


export default function Card(props) {
    const { nasaData } = props;
    return (
        <StyledDiv>
            <h1>{nasaData.title}</h1>
            <p>{nasaData.date}</p>
            <img src={nasaData.url} alt="NASA Astronomy Photo of the Day"></img>
            <p><span>What are we looking at?: </span>{nasaData.explanation}</p>
        </StyledDiv>
    )
}