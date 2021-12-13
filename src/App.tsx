import React, { useState } from "react";
import LoadingScreen from './Loading';
import { SpecificGenerator } from "./GeneratorFetch";
import { AiOutlineQuestionCircle } from 'react-icons/ai';

import {
  AppContainer,
  InputLabel,
  LabelField,
  Output,
  SendButton,
  TitleInput,
  TooltipWrapper,
} from './App.styles';

import ReactTooltip from "react-tooltip";
import AppTabs from "./AppTabs";
import TagSelector from "./TagSelector";

const App: React.FC = function ()
{
  const [token, setToken] = useState("");
  const [apiKey, setApiKey] = useState<string | undefined>("");
  
  const [temp, setTemp] = useState<string>("1");
  const [prompt, setPrompt] = useState<string>("Once upon a time");
  const [showTags, setShowTags] = useState<boolean>(false);
  const [tags, setTags] = useState<string[] | undefined>(undefined);

  const [generating, setGenerating] = useState<number>(-1);

  const [model, setModel] = useState<string>("babbage:ft-ufpe-2021-12-04-17-04-13");

  const post = async function()
  {
    const props =
    {
      model: model,
      apiKey: apiKey,
      postProps: {
        title: prompt,
        temperature: parseFloat(temp),
        tags: showTags ? tags : undefined
      },
      onStartGenerating: () => setGenerating(1),
      onGenerationComplete: (txt: string) => { setToken(txt); setGenerating(0); }
    }

    SpecificGenerator(props);
  }

  let output = '';
  if (generating === 1)
    output = 'Gerando...'
  else if (generating === 0)
    output = token;
  else
    output = '';
  
  return (
    <AppContainer>
      
      <div>
        <AppTabs onClick={setModel} toggleTags={setShowTags}/>
        
        <LabelField>
          <TooltipWrapper>
            <AiOutlineQuestionCircle data-for='apikey-tp' data-tip='Collab API Key. We provided it over Discord!'/>
            <InputLabel htmlFor='apikey'>API Key</InputLabel>
            <ReactTooltip place="top" type="dark" effect="solid" id="apikey-tp"/>
          </TooltipWrapper>
          <TitleInput name='apikey' type='text' value={apiKey} onChange={ e => setApiKey(e.target.value) }/>
        </LabelField>
        <LabelField>
          <TooltipWrapper>
            <AiOutlineQuestionCircle data-for="title" data-tip="Title of the movie you want to generate"/>
            <InputLabel htmlFor='input-prompt'>Title</InputLabel>
            <ReactTooltip place="top" type="dark" effect="solid" id="title"/>
          </TooltipWrapper>
          <TitleInput name='input-prompt' type='text' value={prompt} onChange={ e => setPrompt(e.target.value) }/>
        </LabelField>
        { showTags &&
          <LabelField>
            <TooltipWrapper>
              <AiOutlineQuestionCircle data-for='tag-tp' data-tip='Movie tags. Can select up to 3'/>
              <InputLabel htmlFor='tags'>Tags</InputLabel>
              <ReactTooltip data-multiline={true} place="top" type="dark" effect="solid" id="tag-tp"/>
            </TooltipWrapper>
            <TagSelector setTags={setTags}/>
          </LabelField>
        }
        <LabelField>
          <TooltipWrapper>
            <AiOutlineQuestionCircle data-for='temp-tp' data-tip='Defines how creative the generator will try to be'/>
            <InputLabel htmlFor='input-temp'>Temperature</InputLabel>
            <ReactTooltip place="top" type="dark" effect="solid" id="temp-tp"/>
          </TooltipWrapper>
          <TitleInput name='input-temp' type='range' min='0' max='1' step='0.01' onChange={e=>setTemp(e.target.value)}/>
        </LabelField>
    
      </div>

      <SendButton onClick={post}>Gimme A New Oscar</SendButton>
      
      <Output>
        {generating === 1
          ? <LoadingScreen />
          : output
        }
      </Output>

    </AppContainer>
  );
}

export default App;
