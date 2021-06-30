"use strict";

import { Response, Request } from "express";


/**
 * List of API examples.
 * @route GET /api
 */
export const getTestCheck = (req: Request, res: Response) => {
    const test ={
        nodeVersion: process.version
    };
   
    res.send(test);
};

