import express from "express";
import googleAIConfig from "../init/GoogleGeminiAI";

require('dotenv').config();
const app = express();

const port = 3000;
app.use(express.json());

const gemini = googleAIConfig;
console.log("api key: ", process.env.GOOGLE_GEMINI_API_KEY)

app.post("/gemini", async (req, res) => {
    console.log("bosy : ", req.body)
    const prompt = req.body.prompt;
    

    if(!prompt){
        res.status(403).json("No prompt recieved!")
    }

    const result = await gemini.generateContent(prompt);
    res.send(result);
    console.log(result.response.text());
})


app.listen(port, () => console.log(`Ser ver working on port ${port}`))