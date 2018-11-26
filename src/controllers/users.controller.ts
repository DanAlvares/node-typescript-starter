import { Request, Response } from 'express';

export const getUser = (req: Request, res: Response) => {
    res.send('GOT USER')
};

export const createUser = (req: Request, res: Response) => {
    res.send('CREATED USER')
};

export const updateUser = (req: Request, res: Response) => {
    res.send('UPDATED USER')
};

export const deleteUser = (req: Request, res: Response) => {
    res.send('DELETED USER')
};