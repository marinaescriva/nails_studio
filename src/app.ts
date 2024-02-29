import express, { Application } from "express";

import { createUsers, getUsers, getUsersProfile, updateUsersProfile } from "./controllers/usersController";
import { getServices } from "./controllers/servicesController";
import { getAppointments, getAppointmentsById, postAppointments, updateAppointments } from "./controllers/appointmentsController";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/rolesController";
import { login, register } from "./controllers/authentificationController";




export const app: Application = express();

app.use(express.json());

//USERS 
app.get(`/api/users`, getUsers);
app.get(`/api/users/profile`, getUsersProfile);
app.put(`/api/users/profile`, updateUsersProfile);
app.post('/api/users', createUsers);  //to do

//ROLES
app.post('/api/roles', createRoles);
app.get('/api/roles', getRoles);
app.put('/api/roles', updateRoles);
app.delete('/api/roles/:id', deleteRoles);


//AUTH
app.post(`/api/auth/login`, login);
app.post(`/api/auth/register`, register);

//CITAS APPOINTMENTS
app.get(`/api/appointments/:id`, getAppointmentsById);
app.get(`/api/appointments`, getAppointments);
app.post(`/api/appointments`, postAppointments);
app.put(`/api/appointments`, updateAppointments);

//SERVICES
app.get(`/api/services`, getServices);
