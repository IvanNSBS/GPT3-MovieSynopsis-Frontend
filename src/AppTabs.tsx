import React, { useState } from "react";

import {
    TabsWrapper,
    TabButton
} from './AppTabs.styles';

const tabsModel = {
    'comedy': "babbage:ft-ufpe-2021-12-04-17-04-13",
    'horror': "babbage:ft-ufpe-2021-12-08-02-32-35",
    'general': "curie:ft-ufpe-2021-12-04-00-24-56"
};

const ModelTab: React.FC<{onCLick():void, selected(): boolean}> = function(props)
{     
    return (
        <TabButton selected={props.selected()} onClick={() => props.onCLick()} >{props.children}</TabButton>         
    );
} 

const AppTabs: React.FC<{onClick(model:string):void, toggleTags(value: boolean):void}> = function(props)
{
    const [selected, setSelected] = useState<number>(0);

    const clickTab = function (model: string, showTags: boolean, tabIdx: number)
    { 
        setSelected(tabIdx);
        props.onClick(model);
        props.toggleTags(showTags);
    }

    const isSelected = function (idx: number): boolean
    {
        console.log(`is <${idx}> selected? + ${(selected === idx)}`);
        return selected === idx;
    }

    return (
        <TabsWrapper>
            <ModelTab selected={() => isSelected(0)} onCLick={() => clickTab(tabsModel.comedy, false, 0)}>Comedy</ModelTab>         
            <ModelTab selected={() => isSelected(1)} onCLick={() => clickTab(tabsModel.horror, false, 1)}>Horror</ModelTab>         
            <ModelTab selected={() => isSelected(2)} onCLick={() => clickTab(tabsModel.general, true, 2)}>General</ModelTab>         
        </TabsWrapper>
    )
}

export default AppTabs;
export { tabsModel }