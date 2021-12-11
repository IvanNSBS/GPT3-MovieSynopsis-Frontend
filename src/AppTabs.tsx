import React from "react";

import {
    TabsWrapper,
    TabButton
} from './App.styles';

const tabsModel = {
    'comedy': "babbage:ft-ufpe-2021-12-04-17-04-13",
    'horror': "babbage:ft-ufpe-2021-12-08-02-32-35",
    'general': "curie:ft-ufpe-2021-12-04-00-24-56"
};

const ModelTab: React.FC<{onCLick():void}> = function(props)
{ 
    return (
        <TabButton onClick={() => props.onCLick()} >{props.children}</TabButton>         
    );
} 

const AppTabs: React.FC<{onClick(model:string):void, toggleTags(value: boolean):void}> = function(props)
{
    const clickTab = function (model: string, showTags: boolean)
    { 
        props.onClick(model);
        props.toggleTags(showTags);
    }

    return (
        <TabsWrapper>
            <ModelTab onCLick={() => clickTab(tabsModel.comedy, false)}>Comedy</ModelTab>         
            <ModelTab onCLick={() => clickTab(tabsModel.horror, false)}>Horror</ModelTab>         
            <ModelTab onCLick={() => clickTab(tabsModel.general, true)}>General</ModelTab>         
        </TabsWrapper>
    )
}

export default AppTabs;
export { tabsModel }