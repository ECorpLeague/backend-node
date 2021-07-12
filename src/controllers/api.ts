import { Response, Request } from 'express';
import logger from '../util/logger';

export const getTestCheck = async (req: Request, res: Response): Promise<void> => {
    const test = {
        nodeVersion: process.version
    };

    logger.warn('TEST WARN');

    res.send(test);
};
