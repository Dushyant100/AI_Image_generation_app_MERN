import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai';


dotenv.config()

// const API_KEY = "

const router = express.Router();

const configuration = new Configuration({
    // apikey: process.env.OPENAI_API_KEY,
    apiKey: "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",
})

// console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAIApi(configuration)

router.route('/').get((req,res) => {
    res.send('Hello from DALL-E!')
})

router.route('/').post( async (req,res) => {
    try{
        // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        
        const { prompt } = req.body;
        console.log("prompt: ", prompt);

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        // console.log("image: ", aiResponse);
        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({ photo: image });

    } catch(error){
        console.error(error);
        res.status(500).send(error?.response.data.error.message || 'something went wrong')
    }
});


export default router