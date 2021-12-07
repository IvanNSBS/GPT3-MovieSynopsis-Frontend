import React from "react";

import {
    TabsWrapper,
    TabButton
  } from './App.styles';

  
const AppTabs: React.FC = function ()
{
    return (
        <TabsWrapper>
            <TabButton>Comedy</TabButton>         
            <TabButton>Horror</TabButton>         
            <TabButton>General</TabButton>         
        </TabsWrapper>
    )
}

export default AppTabs;