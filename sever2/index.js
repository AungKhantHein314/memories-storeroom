import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import routesPosts from "./routes/posts.js";

const App = express();
dotenv.config()

App.use(bodyParser.json({ limit: "30mb", extended: true }));
App.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
App.use(cors());
App.use('/posts', routesPosts);
App.get('/', (req, res) => {
    res.send("Welcome from memories")
});

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => {
        App.listen(PORT, () => {
            console.log(`Server running on port ${PORT}...`)
        })
    })
    .catch(error => {
        if(error) {
            console.error(error.message)
        }
    });
