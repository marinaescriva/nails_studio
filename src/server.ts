
import express, { Application } from "express";
import dotenv from "dotenv";
import {getUsers, getUsersProfile, putUsersProfile} from "./controllers/usersController"; 
import { getServices } from "./controllers/servicesController";
import { postAuthLogin, postAuthRegister } from "./controllers/authentificationController";
import { getAppointments, getAppointmentsbyID, postAppointments, putAppointments } from "./controllers/appointmentsController";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 4001;


app.get(`/users`, getUsers );
app.get(`/users/profile`, getUsersProfile);
app.put(`/users/profile`, putUsersProfile);

app.post(`/auth/login`, postAuthLogin);
app.post(`/auth/register`, postAuthRegister); 

app.get(`/appointments/{id}`, getAppointments);
app.get(`/appointments`, getAppointmentsbyID );
app.post(`/appointments`, postAppointments );
app.put(`/appointments`, putAppointments);

app.get(`/services`, getServices);

app.listen(PORT,() =>{
    console.log(`server is running on port: ${PORT}`);
});