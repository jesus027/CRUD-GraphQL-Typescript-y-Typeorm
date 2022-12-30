import { createConnection } from "typeorm";
import { Projects } from './Entities/Projects';
import { Devs } from './Entities/Devs';
import { Especialidad } from "./Entities/Especialidad";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from './config';

export const connectDB = async () => {
    await createConnection({
        type: 'mysql',
        username: DB_USERNAME,
        password: DB_PASSWORD,
        port: Number(DB_PORT),
        host: DB_HOST,
        database: DB_NAME,
        entities: [Devs, Projects, Especialidad],
        synchronize: false,
        ssl: false
    });
};