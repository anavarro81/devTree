import { Router } from "express";
import User from './models/User'
const router = Router();
import {createUser} from './handlers/index'
// Permite validar req.body
import {body} from 'express-validator'



router.get('/', (req, res) => {
    res.send('User route...')
})

router.post('/auth/register', 
    
    body('handle').notEmpty(),    
    createUser)
    


export default router;