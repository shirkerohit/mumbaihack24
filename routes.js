import express, { response } from 'express';
import { ModelResponder } from './Controller/ModelController.js';
import { Allergies } from './Config/Allergies.js';

const router = express.Router();

router.post('/identify', async (req, res) => {
    const body = req.body;
    const content = body.content;
    try {
        const modelResponse = await ModelResponder('identify',{ content : content });
        res.json({ response: modelResponse });
    } catch (error) {
        res.status(400);
        res.json({ error : 'failed'});   
    }
    
});


router.post('/recommend', async (req, res) => {
    try {
        
        const content = req.body.content.replace(/\n/g, ' ');
        const allergies = req.body.allergies;
        let inputString = content;

        if(allergies)
        {
            inputString = content + " " + 'The person has' + allergies;
        }

        let identifiedElements = await ModelResponder('identify',{ content : content });
        console.log('identifiedElements are ===== ' + identifiedElements);

        // check if identifiedElements has text "None"
        const regex = /\bNone\b/;
        const regex1 = /\bI can't provide\b/;
        if(regex.test(identifiedElements) || regex1.test(identifiedElements))
        {
            res.status(400);
            res.json({ error : "Invalid element provided"});
            return;
        }

        const modelResponse = await ModelResponder('recommend',{ content : identifiedElements });
    
        console.log(modelResponse);

    res.json({ response: JSON.parse(modelResponse) });
    } catch (error) {
        console.log(error);
        res.status(400);
        res.json({ error : 'failed'});
    }
});

router.post('/recommend2', async (req, res) => {
    try {
        
        const content = req.body.content.replace(/\n/g, ' ');
        const allergies = req.body.allergies;
        const age = req.body.age;
        const gender = req.body.gender;

        let identifiedElements = await ModelResponder('identify',{ content : content });
        console.log('identifiedElements are ===== ' + identifiedElements);

        // check if identifiedElements has text "None"
        const regex = /\bNone\b/;
        const regex1 = /\bI can't provide\b/;
        if(regex.test(identifiedElements) || regex1.test(identifiedElements))
        {
            res.status(400);
            res.json({ error : "Invalid element provided"});
            return;
        }

        let inputString = "Identified elements are " + identifiedElements;

        if(allergies)
        {
            inputString = inputString + " " + ' The person has ' + allergies;
        }

        if(age)
        {
            inputString = inputString + " " + ' The persons age is ' + age;
        }

        if(gender)
        {
            inputString = inputString + " " + ' The persons gender is ' + gender;
        }

        const modelResponse = await ModelResponder('recommend2',{ content : inputString });
    
        console.log(modelResponse);

    res.json({ response: JSON.parse(modelResponse) });
    } catch (error) {
        console.log(error);
        res.status(400);
        res.json({ error : 'failed'});
    }
});


router.post('/why', async (req, res) => {
    try {
        const body = req.body;
        const content = body.content;
        const modelResponse = await ModelResponder('why',content);
        console.log(modelResponse);
        res.json({ response: JSON.parse(modelResponse) });
        
    } catch (error) {
        res.status(400);
        res.json({ error : 'failed'});
    }
});

router.get('/test', (req, res) => {
    res.json({ test : 'test' });
});

export default router;
