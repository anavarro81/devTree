import e from "express";
import mongoose, {Schema, model} from "mongoose";

export interface IUser {
    name: string;
    email: string;
    password: string;
}   


const userSchema = new Schema({    

    // trim: true -> Elimina los espacios en blanco al inicio y al final
    // unique: true -> No se pueden repetir los valores para el campo. 
    name: {
        type: String,
        required: true,    
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim:true,
        unique: true,
    },
    
    password: {
        type: String,
        required: true,        
        trim: true
    },
},
    {
        timestamps: true
    }
);
// Se utiliza un Generics para indicar que el interface IUser es el que se va a utilizar
const User = model<IUser>('User', userSchema);
export default User;