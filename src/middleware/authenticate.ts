import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../types';

export function Authenticate(req: Request | any, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedUser = jwt.verify(token, process.env.SECRET_KEY) as User;
        req.locals.user = decodedUser;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed',
        });
    }
}
