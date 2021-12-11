import React, { useEffect, useState } from "react";
import LoadingScreen from './Loading';
import { SpecificGenerator } from "./GeneratorFetch";

import {
  AppContainer,
  InputLabel,
  LabelField,
  Output,
  TitleInput,
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

  useEffect(() => {
    setApiKey(process.env.REACT_APP_COLAB_KEY);
  }, []);

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
          <InputLabel htmlFor='input-prompt'><a data-for="title" data-tip="Movie Title"> Title </a></InputLabel>
          <ReactTooltip place="top" type="dark" effect="float" id="title"/>
          <TitleInput name='input-prompt' type='text' value={prompt} onChange={ e => setPrompt(e.target.value) }/>
        </LabelField>
        { showTags &&
          <LabelField>
            <InputLabel htmlFor='tags'>Tags</InputLabel>
            <TagSelector setTags={setTags}/>
          </LabelField>
        }
        <LabelField>
          <InputLabel htmlFor='input-temp'>Temperature</InputLabel>
          <TitleInput name='input-temp' type='range' min='0' max='1' step='0.01' onChange={e => setTemp(e.target.value)} />
          <label>{ temp }</label>
        </LabelField>
    
      </div>

      <button onClick={post}>Gimme Me A New Oscar</button>
      
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
