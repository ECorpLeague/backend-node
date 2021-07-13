import Database from '../database/Database';
import { Match } from '../models/Match.model';
import { Team } from '../models/Team.model';

export const initDB = async (): Promise<void> => {
    try {
        await Database.dbClient.authenticate();
        console.log('Connection has been established successfully.');
        await dbTablesInit();
        console.log('Tables was successfully created.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

const dbTablesInit = async () => {
    Team.sync({ force: true });
    Match.sync({ force: true });
};
