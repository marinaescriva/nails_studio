import "reflect-metadata"
import { DataSource } from "typeorm"
import { Roles1709051246240 } from "./migrations/1709051246240-roles";
import { Users1709021870692 } from "./migrations/1709021870692-users";
import { Services1709022161726 } from "./migrations/1709022161726-services";
import { Appointments1709022146028 } from "./migrations/1709022146028-appointments";


import "dotenv/config"


export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST || "localhost",
port: Number(process.env.DB_PORT)||3308,
username: process.env.DB_USER || "root",
password: process.env.DB_ROOT_PASSWORD ||"",
database: process.env.DB_DATABASE ||"test",
entities: [],
migrations:[Roles1709051246240 , Users1709021870692, Services1709022161726, Appointments1709022146028],
synchronize: false,
logging: false,
});

// Appointments1709022146028,Authentification1709022178841,Services1709022161726  ],