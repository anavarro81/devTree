import User from '../models/User'
import {Request, Response} from 'express'
import {validationResult} from 'express-validator'


export const createUser = async (req: Request, res: Response) => {       

    let errors = validationResult(req)

    // Si no está vacío, hay errores
    if (!errors.isEmpty()) {
        console.log('Error en datos de entrada', errors.array())
         // la firma de express debe devolver void, no se usa return. 
         res.status(400).json({ errors: errors.array() });
        
    }


    try {
        const user = await User.create(req.body)    
        res.status(200).json({ user });
    } catch (error) {
        console.log('error registo usuario', error)
        res.status(500).json({message: error})
    }

}

export const loginUser = async (req: Request, res: Response) => {

    
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        res.status(400).json({message: 'Usuario no encontrado'})
    }

    if (!user?.password) {
        res.status(400).json({message: 'Password no encontrado'})
    }

    if (user?.password !== req.body.password) {
        res.status(400).json({message: 'Contraseña incorrecta'})
    }

    res.status(200).json({message: 'Usuario logueado'})

}