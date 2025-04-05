import User from '../models/User'
import {Request, Response} from 'express'
import {validationResult} from 'express-validator'
import {hashpassword} from '../utils/auth'

export const createUser = async (req: Request, res: Response) => {       

    let errors = validationResult(req)

    // Si no está vacío, hay errores
    if (!errors.isEmpty()) {
        console.log('Error en datos de entrada', errors.array())
         // la firma de express debe devolver void, no se usa return. 
         res.status(400).json({ errors: errors.array() });
        return;
    }    


    try {
        const {password, ...rest} = req.body
        const hashedPassword = await hashpassword(password)      
        const newUser = await User.create({...rest, password: hashedPassword})    
        res.status(201).json({ newUser });
    } catch (error: any) {
        console.error('Error en el registo usuario', error)
        res.status(500).json({message: error.message})
    }

}

export const loginUser = async (req: Request, res: Response) => {

    let {email, password} = req.body
    
    // Comprobar si el usuario ya existe
    const userExist = await User.findOne({email: email})
    
    if (!userExist) {
        res.status(404).json({message: 'El usuario no existe'})
        // Se hacer return para que no se ejecute el resto del código
        return;
    }    

    if(userExist.password !== password) {
        res.status(400).json({message: 'Contraseña incorrecta'})
        return;    
    }


    res.status(200).json({message: 'Usuario logueado'})
    

}