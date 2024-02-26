
import express, { Application } from "express";
import dotenv from "dotenv";
import {getUsers} from "./controllers/usersController"; 

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 4001;


app.get(`/users`, getUsers );

app.get(`/users/profile`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "ver perfil de usuario"
        }
    )

});
app.put(`/users/profile`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "modificar un campo del perfil"
        }
    )

});

app.listen(PORT,() =>{
    console.log(`server is running on port: ${PORT}`);
});