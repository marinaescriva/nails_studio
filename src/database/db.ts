import "reflect-metadata"
import { DataSource } from "typeorm"
import { Roles1709051246240 } from "./migrations/1709051246240-roles";
import { Users1709021870692 } from "./migrations/1709021870692-users";
import { Services1709022161726 } from "./migrations/1709022161726-services";
import { Appointments1709143422875 } from "./migrations/1709143422875-appointments";

import "dotenv/config"
import { Service } from "../models/Service";
import { Appointment } from "../models/Appointment";
import { User } from "../models/User";
import { Role } from "../models/Role";
import { AddIsActiveColumnToUsers1709219681873 } from "./migrations/1709219681873-add_is_active_column_to_users";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3308,
    username: process.env.DB_USER || "root",
    password: process.env.DB_ROOT_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [Service,
        Appointment,
        User,
        Role],
    migrations: [Roles1709051246240,
        Users1709021870692,
        Services1709022161726,
        Appointments1709143422875,
        AddIsActiveColumnToUsers1709219681873],
    synchronize: false,
    logging: false,
});