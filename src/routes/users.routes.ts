import { Authenticate } from '../middleware/authenticate';
import { Router } from 'express';
import * as usersCtrl from '../controllers/users.controller';

export function UserRoutes(router: Router){
    router.route('/user/:id')
        .get(usersCtrl.getUser)
        .post(Authenticate, usersCtrl.createUser)
        .put(Authenticate, usersCtrl.updateUser)
        .delete(Authenticate, usersCtrl.deleteUser);
    
};