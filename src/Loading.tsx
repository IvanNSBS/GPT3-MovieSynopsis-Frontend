import React from "react";
import { TextWrapper, Text, LoadingIcon } from "./Loading.styles";

const LoadingScreen: React.FC = function() 
{
    return (
        <TextWrapper>
            <Text>Generating...</Text>
            <LoadingIcon/>
        </TextWrapper>
    );
}

export default LoadingScreen;