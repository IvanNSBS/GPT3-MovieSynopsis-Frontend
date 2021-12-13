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

const TooltipWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputLabel = styled.label`
    margin-right: 10px;
    margin-left: 10px;
`;

const Output = styled.div`
    padding: 20px 5%;
    font-size: 1.5em;
`;

const TitleInput = styled.input`
    width: 340px;
    max-width: 340px;
    padding-left: 10px;
    border: 1px solid #93999e;
    border-radius: 4px;
    height: 38px;
`;


const selectedColor = "#c4c7d1"

const SendButton = styled.button`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 8px 16px;
    height: 40px;

    width: auto;
    font-size: 1.1em;
    background-color: white;

    text-align: center;
    vertical-align: middle;

    transition: all 0.2s ease-out;

    &:hover
    {
        cursor: pointer;
        background-color: #c4c7d17b;
    }

    &:active
    {
        background-color: ${selectedColor}
    }
`;

export { AppContainer, LabelField, Output, TitleInput, InputLabel, SendButton, TooltipWrapper }