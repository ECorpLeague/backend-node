import { Sequelize } from 'sequelize';
import { Team } from '../models/Team.model';

export const dbClient = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export const initDB = async (): Promise<void> => {
    try {
        await dbClient.authenticate();
        console.log('Connection has been established successfully.');
        await dbTablesInit();
        console.log('Tables was successfully created.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

const dbTablesInit = async () => {
    await Team.sync();
};
