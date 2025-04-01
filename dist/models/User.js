"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
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
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});
// Se utiliza un Generics para indicar que el interface IUser es el que se va a utilizar
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
