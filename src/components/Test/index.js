import React from "react";
import styled from "styled-components";


const styledTest = styled.div`
    height: 20px;
    width: 20px;

    border: 1px solid red;
`;

const Test = () => {
    return(
        <styledTest>
            <h1>Testeee</h1>
        </styledTest>
    );
};

export default Test;