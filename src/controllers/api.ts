import { Response, Request } from 'express';
import logger from '../util/logger';

export const getTestCheck = (req: Request, res: Response): void => {
    const test = {
        nodeVersion: process.version
    };

    logger.warn('TEST WARN');

    res.send(test);
};
