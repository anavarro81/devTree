"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const express_validator_1 = require("express-validator");
const auth_1 = require("../utils/auth");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errors = (0, express_validator_1.validationResult)(req);
    // Si no está vacío, hay errores
    if (!errors.isEmpty()) {
        console.log('Error en datos de entrada', errors.array());
        // la firma de express debe devolver void, no se usa return. 
        res.status(400).json({ errors: errors.array() });
        return;
    }
    try {
        const _a = req.body, { password } = _a, rest = __rest(_a, ["password"]);
        const hashedPassword = yield (0, auth_1.hashpassword)(password);
        const newUser = yield User_1.default.create(Object.assign(Object.assign({}, rest), { password: hashedPassword }));
        res.status(201).json({ newUser });
    }
    catch (error) {
        console.error('Error en el registo usuario', error);
        res.status(500).json({ message: error.message });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    // Comprobar si el usuario ya existe
    const userExist = yield User_1.default.findOne({ email: email });
    if (!userExist) {
        res.status(404).json({ message: 'El usuario no existe' });
        // Se hacer return para que no se ejecute el resto del código
        return;
    }
    if (userExist.password !== password) {
        res.status(400).json({ message: 'Contraseña incorrecta' });
        return;
    }
    res.status(200).json({ message: 'Usuario logueado' });
});
exports.loginUser = loginUser;
