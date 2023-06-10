import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY

if(!openaiApiKey){
    console.error("Open AI API key is not set");
    process.exit(1);
}
//console.log("KEY : "+ openaiApiKey);
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;