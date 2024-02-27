import express, { Application } from "express";

import { getUsers, getUsersProfile, putUsersProfile } from "./controllers/usersController";
import { getServices } from "./controllers/servicesController";
import { postAuthLogin, postAuthRegister } from "./controllers/authentificationController";
import { getAppointments, getAppointmentsbyID, postAppointments, putAppointments } from "./controllers/appointmentsController";


export const app: Application = express();

app.use(express.json());


app.get(`/users`, getUsers);
app.get(`/users/profile`, getUsersProfile);
app.put(`/users/profile`, putUsersProfile);

app.post(`/auth/login`, postAuthLogin);
app.post(`/auth/register`, postAuthRegister);

app.get(`/appointments/{id}`, getAppointments);
app.get(`/appointments`, getAppointmentsbyID);
app.post(`/appointments`, postAppointments);
app.put(`/appointments`, putAppointments);

app.get(`/services`, getServices);
