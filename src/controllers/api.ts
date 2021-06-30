
import { Response, Request } from "express";
import logger from "../util/logger";


/**
 * List of API examples.
 * @route GET /api
 */
export const getTestCheck = (req: Request, res: Response) => {
    const test ={
        nodeVersion: process.version
    };

    logger.warn("TEST WARN");
   
    res.send(test);
};

