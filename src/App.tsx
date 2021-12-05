import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from "react";

const url = "https://api.openai.com/v1/completions";


const App: React.FC = function ()
{
  const [token, setToken] = useState("");
  const [apiKey, setApiKey] = useState<string | undefined>("");
  
  const [temp, setTemp] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("Once upon a time");
  const [generating, setGenerating] = useState<number>(-1);

  const post = async function ()
  {
    if (apiKey === undefined)
    {
      console.log("No COLAB API key for project. Can't submit a request")
      return;
    }
    
    let params = {
      "prompt": prompt,
      "model": "babbage:ft-ufpe-2021-12-04-17-04-13",
      "max_tokens": 200,
      "temperature": parseInt(temp),
      "top_p": 1,
      "n": 1,
      "stream": false,
      "logprobs": null,
      "stop": "+++"
    };

    setGenerating(1);

    await axios.post(url, params, {headers: {Authorization: apiKey}})
      .then(res => {
        console.log(res.data);
        setToken(res.data.choices[0].text);
        setGenerating(0);
      })
      .catch((e: AxiosError) => {
        alert(e);
      })
  }

  useEffect(() => {
    setApiKey(process.env.REACT_APP_COLAB_KEY);
  });

  let output = '';
  if (generating === 1)
    output = 'Gerando...'
  else if (generating === 0)
    output = token;
  else
    output = '';
  
  return (
    <div className="App">
      <div>

        <div>
          <div>
            <label htmlFor='input-prompt'>Título</label>
            <input name='input-prompt' type='text' value={prompt} onChange={ e => setPrompt(e.target.value) }/>
          </div>
          <div>
            <label htmlFor='input-temp'>Temperatura</label>
            <input name='input-temp' type='range' min='0' max='1' step='0.01' onChange={ e => setTemp(e.target.value) }/>
          </div>
        </div>

        <button onClick={post}>Ok</button>
      </div>
      <p>
        {output}
      </p>
    </div>
  );
}

export default App;
