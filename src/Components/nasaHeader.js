import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledHeader = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
  `

const LeftDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 3%;
    width: 50%;
`
const RightDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    padding-right: 4%
`

export default function Header() {

    return (
        <StyledHeader id="top">
            <LeftDiv>
                <h2>Astronomy Photo of the Day!</h2>
            </LeftDiv>
            <RightDiv>
                <a href="https://www.nasa.gov/" target="_blank">Nasa Homepage</a>
            </RightDiv>
        </StyledHeader>
        
    )
}