import express, { Application } from "express";

import { getUsers, getUsersProfile, putUsersProfile } from "./controllers/usersController";
import { getServices } from "./controllers/servicesController";
import { postAuthLogin, postAuthRegister } from "./controllers/authentificationController";
import { getAppointments, getAppointmentsbyID, postAppointments, putAppointments } from "./controllers/appointmentsController";


export const app: Application = express();

app.use(express.json());

//USERS 
app.get(`/api/users`, getUsers);
app.get(`/api/users/profile`, getUsersProfile);
app.put(`/api/users/profile`, putUsersProfile);
//AUTH
app.post(`/api/auth/login`, postAuthLogin);
app.post(`/api/auth/register`, postAuthRegister);
//CITAS APPOINTMENTS
app.get(`/api/appointments/:id`, getAppointmentsbyID);
app.get(`/api/appointments`, getAppointments);
app.post(`/api/appointments`, postAppointments);
app.put(`/api/appointments`, putAppointments);
//SERVICES
app.get(`/api/services`, getServices);
