import { Router } from "express";

import {login,logout} from '../repositories/autentication.js'
import {authMiddleware} from '../middlewares/middleware.js'
import {loginSchema} from '../schemas/index.js'


const router = Router();
 

router.post('/login', async (req, res) => {
    
    try {
        let credentials = loginSchema.validateSync(req.body, {stripUnknown: true});
        
        let user = await login(credentials.username, credentials.password);
        res.send(user);

    } catch(ex) {
        res.status(401).send();
    }

})

router.post('/logout', authMiddleware, async (req, res) => {
	try {
        logout(req);

        return res.status(204).send()

    } catch (ex) {
        return res.status(404).send(ex)
    }
})
export default router