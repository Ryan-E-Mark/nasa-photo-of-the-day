import React, { useState, useEffect } from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    padding: 1% 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p, span, h1 {
        color: ${pr => pr.theme.tertiaryColor};
      }

    h1 {
        font-size: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 1.6rem;
    }
`
const StyledText = styled.div`
    width: 60%;
`

export default function Card(props) {
    const { nasaData } = props;
    return (
        <StyledDiv>
            <h1>{nasaData.title}</h1>
            <p>{nasaData.date}</p>
            <img src={nasaData.url} alt="NASA Astronomy Photo of the Day"></img>
            <StyledText>
            <p><span>What are we looking at?: </span>{nasaData.explanation}</p>
            </StyledText>
        </StyledDiv>
    )
}