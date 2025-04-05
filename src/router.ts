import { Router } from "express";
import User from './models/User'
const router = Router();
import {createUser, loginUser} from './handlers/index'
// Permite validar req.body
import {body} from 'express-validator'



router.get('/', (req, res) => {
    res.send('User route...')
})

router.post('/auth/register', 
    
    body('handle')
                .notEmpty()
                .withMessage('El handle es obligatorio'),

    body('name').notEmpty()
                .withMessage('El nombre es obligatorio'),   

    body('email').isEmail()
                .withMessage('El email no es correcto'),
    
    body('password')
            .isLength({min: 8})
            .withMessage('La contraseña debe tener al menos 8 caracteres'),
    
    createUser)

router.post('/auth/login',loginUser)    


    

    


export default router;