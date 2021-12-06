import styled from "styled-components";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Text = styled.span`
    user-select: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3em;
`

const LoadingIcon = styled(AiOutlineLoading3Quarters)`
    width : 1.1em;
    height: 1.1em;
    fill: black;
    animation: loading 4s linear infinite;
    @keyframes loading {
        to { transform: rotate(360deg); }
    }
`

const TextWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    column-gap: 20px;
    width: 100%;
    align-content: flex-start;
    justify-content: center;
    text-align: left;
`

export { Text, LoadingIcon, TextWrapper }