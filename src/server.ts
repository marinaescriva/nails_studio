
import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 4001;


app.get(`/users`, );

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