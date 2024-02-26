
import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 4001;

app.post(`/auth/register`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "registro de usuarios"
        }
    )

});
app.post(`/auth/login`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "login de usuarios"
        }
    )

});
app.get(`/users`, (req, res)=>{

    res.status(200).json(  //solo debe ser para super_admin
        {
            success:true,
            message: "ver todos los usuarios"
        }
    )

});
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
app.post(`/appointments`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "crear cita"
        }
    )

});
app.put(`/appointments`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "actualizar mi cita"
        }
    )

});
app.get(`/appointments/{id}`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "recuperar mi cita"
        }
    )

});
app.get(`/appointments`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "ver mis citas"
        }
    )

});
app.get(`/services`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "ver todos los servicios"
        }
    )

});

app.listen(PORT,() =>{
    console.log(`server is running on port: ${PORT}`);
});