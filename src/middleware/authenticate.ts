import * as jwt from 'jsonwebtoken';

export function Authenticate (req: any, res: any, next: any) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed',
        });
    }
}
