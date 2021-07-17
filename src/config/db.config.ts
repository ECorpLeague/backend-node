import 'reflect-metadata';

import { createConnection, ConnectionOptions } from 'typeorm';
import { Game } from '../models/Game.model.';
import { Team } from '../models/Team.model';

const connection: ConnectionOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [Game, Team],
    extra: { ssl: { rejectUnauthorized: false } }
};

export const initDB = async (): Promise<void> => {
    try {
        await createConnection(connection);
        console.log('Successfull connected to the database');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
