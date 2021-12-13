import styled from "styled-components"

const selectedColor = "#c4c7d1"
const unselectedColor = "white"

const TabButton = styled.button<{selected: boolean}>`
    border: 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 40px;
    width: auto;
    font-size: 1.1em;
    background-color: ${ props => props.selected ? selectedColor : unselectedColor };

    transition: all 0.2s ease-out;

    &:hover
    {
        cursor: pointer;
        background-color: #c4c7d1ae;
    }
`;

const TabsWrapper = styled.div`
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    align-items: flex-start;
`;

export { TabButton, TabsWrapper }