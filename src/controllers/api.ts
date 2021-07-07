import { Response, Request } from 'express';
import { dbClient } from '../config/db.config';
import logger from '../util/logger';

export const getTestCheck = async (req: Request, res: Response): Promise<void> => {
    const test = {
        nodeVersion: process.version
    };

    logger.warn('TEST WARN');

    const dbResponse = await dbClient.query('SELECT table_schema,table_name FROM information_schema.tables');
    console.log(JSON.stringify(dbResponse.rows));
    // if (err) {
    // console.log('DB error', err);
    // throw err;
    // }
    // for (const row of res.rows) {

    // }
    // dbClient.end();

    res.send(test);
};
