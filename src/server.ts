
import express, { Application } from "express";

const app: Application = express();

app.listen(4001,() =>{
    console.log("server is running")
});