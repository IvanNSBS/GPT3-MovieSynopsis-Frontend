import axios, { AxiosError } from 'axios';
import { tabsModel } from './AppTabs'

interface PostProps
{
    title: string,
    temperature: number,
    tags: string[] | undefined;
}

interface GeneratorInterface
{
    model: string;
    apiKey: string | undefined;
    postProps: PostProps;
    onStartGenerating(): void;
    onGenerationComplete(text: string): void
}

const url = "https://api.openai.com/v1/completions";

const SpecificGenerator = async function (props: GeneratorInterface)
{
    if (props.apiKey === undefined)
    {
        console.log("No COLAB API key for project. Can't submit a request")
        return "";
    }
    
    const postProps = props.postProps;
    const temp = postProps.temperature;
    const title = postProps.title;

    let prompt = title + ' ->';
    if (props.model === tabsModel.general)
    {
        let tagList = '';
        if (postProps.tags !== undefined && postProps.tags.length > 0)
        { 
            for (let i = 0; i < postProps.tags.length-1; i++)
                tagList += postProps.tags[i] + ', ';
            
            tagList += postProps.tags[postProps.tags.length - 1] + ' ->';
        }

        prompt = `title=${title}, tags=${tagList}`
        console.log("prompt: "+ prompt);
    }

    let params = {
        "prompt": prompt,
        "model": props.model,
        "max_tokens": 200,
        "temperature": temp,
        "top_p": 1,
        "n": 1,
        "stream": false,
        "logprobs": null,
        "stop": "+++"
    };
    
    props.onStartGenerating();

    await axios.post(url, params, { headers: { Authorization: props.apiKey}})
    .then(res => {
        console.log(res.data);
        props.onGenerationComplete(res.data.choices[0].text);
    })
    .catch((e: AxiosError) => {
        alert(e);
        props.onGenerationComplete("");
        return "";
    })

    return "";
}

export { SpecificGenerator }