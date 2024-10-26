import { Ollama } from 'ollama'
import { systemPrompts, prompt }  from '../Config/Prompts.js';


export const ModelResponder = async (action, input)=> {
    
    let inputprompt = '';

    switch (action) {
        case 'identify':
            inputprompt = prompt.identify;
            break;
        case 'recommend':
            inputprompt = prompt.recommend;
            break;
        case 'recommend2':
            inputprompt = prompt.recommend2;
            break;
        case 'why':
            inputprompt = prompt.why;
            break;
        default:
            break;
    }

    if(inputprompt == '')
    {
        throw new Error("No prompt found!");
    }

    let inputPrompt = `${inputprompt} ${input.content}`;
    if(action == 'identify')
    {
        inputPrompt = `${inputprompt} the ingredient list to analyse are ${input.content}`;
    }

    console.log(inputPrompt);

    const model = new Ollama({ host: 'http://localhost:11434' });
    const response = await model.generate({
        model: 'llama3.2',
        prompt : inputPrompt,
        system :  systemPrompts.context,
        options : {
            temperature : 0.7,
            top_p : 0.9
        }
    });
    
    return response.response;
}