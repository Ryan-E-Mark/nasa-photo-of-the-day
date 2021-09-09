import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledFooter = styled.div`
    padding: 1%;    
    text-align: center;
`

export default function Footer() {

    return (
        <StyledFooter>
            <a href="#top">Return to top</a>
        </StyledFooter>
        
    );
}