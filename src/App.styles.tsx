import styled from "styled-components";

const AppContainer = styled.div`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

const LabelField = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 7px;
    font-size: 1.3em;
    padding-bottom: 8px;
`;

const Output = styled.div`
    padding: 20px 5%;
    font-size: 1.5em;
`;

const TabsWrapper = styled.div`
width: 100%;
    padding-bottom: 20px;
    display: flex;
    align-items: flex-start;
`

const TabButton = styled.button`

`

export { AppContainer, LabelField, Output, TabsWrapper, TabButton }