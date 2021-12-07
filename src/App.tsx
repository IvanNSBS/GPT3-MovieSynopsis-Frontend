import React, { useEffect, useState } from "react";
import LoadingScreen from './Loading';
import { SpecificGenerator } from "./GeneratorFetch";

import {
  AppContainer,
  LabelField,
  Output,
} from './App.styles';
import AppTabs from "./AppTabs";

const App: React.FC = function ()
{
  const [token, setToken] = useState("");
  const [apiKey, setApiKey] = useState<string | undefined>("");
  
  const [temp, setTemp] = useState<string>("1");
  const [prompt, setPrompt] = useState<string>("Once upon a time");
  const [generating, setGenerating] = useState<number>(-1);

  const model = "babbage:ft-ufpe-2021-12-04-17-04-13";

  const post = async function()
  {
    const props =
    {
      model: model,
      apiKey: apiKey,
      postProps: {
        title: prompt,
        temperature: parseFloat(temp),
        tags: undefined
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
        <AppTabs/>
        
        <LabelField>
          <label htmlFor='input-prompt'>Title</label>
          <input name='input-prompt' type='text' value={prompt} onChange={ e => setPrompt(e.target.value) }/>
        </LabelField>
        <LabelField>
          <label htmlFor='input-temp'>Temperature</label>
          <input name='input-temp' type='range' min='0' max='1' step='0.01' onChange={e => setTemp(e.target.value)} />
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
