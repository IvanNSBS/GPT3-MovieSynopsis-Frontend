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
    display: flex;
    justify-content: space-between;
    font-size: 1.3em;
    padding-bottom: 8px;
`;

const InputLabel = styled.label`
    margin-right: 25px;
`

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

const TitleInput = styled.input`
    width: 340px;
    max-width: 340px;
    padding-left: 10px;
    border: 1px solid #93999e;
    border-radius: 4px;
    height: 38px;
`

const TabButton = styled.button`

`

export { AppContainer, LabelField, Output, TabsWrapper, TabButton, TitleInput, InputLabel }