import express from "express";
import cors from "cors";
import generate from "./generate.js"
//default imports

const app =express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005; //in prod, .env has port

app.get("/", ( req,res) => {
    res.send("Hello from API");
})

app.post("/generate", async (req,res) => {
    const queryDescription = req.body.queryDescription
    try{
        const sqlQuery = await generate(queryDescription)
        res.json({ response : sqlQuery})
    } catch (error) {
        //console.error(error)
        res.status(500).send("Error while using openAi API")
    }
})

app.listen(port,() => {
    console.log('Listening on port' + port);
})