import 'reflect-metadata';

import { createConnection, ConnectionOptions } from 'typeorm';
import { Game } from '../models/Game.model';
import { Round } from '../models/Round.model';
import { Team } from '../models/Team.model';
import { Tournament } from '../models/Tournament.model';
import logger from '../util/logger';

const connection: ConnectionOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [Game, Team, Round, Tournament],
    extra: { ssl: { rejectUnauthorized: false } }
};

export const initDB = async (): Promise<void> => {
    try {
        await createConnection(connection);
        logger.info('[DB] Successfull connected to the database');
    } catch (error) {
        logger.error(`[DB] Unable to connect to the database: ${error}`);
    }
};
