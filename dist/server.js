"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
require("dotenv/config");
const bd_1 = require("./config/bd");
const app = (0, express_1.default)();
(0, bd_1.connectDB)();
// Permite leer los datos que vienen de un formulario
app.use(express_1.default.json());
app.use('/user', router_1.default);
app.use('/', (req, res) => {
    res.send('Server is running...');
});
exports.default = app;
