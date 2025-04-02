"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_1 = require("./handlers/index");
// Permite validar req.body
const express_validator_1 = require("express-validator");
router.get('/', (req, res) => {
    res.send('User route...');
});
router.post('/auth/register', (0, express_validator_1.body)('handle')
    .notEmpty()
    .withMessage('El handle es obligatorio'), (0, express_validator_1.body)('mame').notEmpty()
    .withMessage('El nombre es obligatorio'), (0, express_validator_1.body)('email').isEmail()
    .withMessage('El email no es correcto'), (0, express_validator_1.body)('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'), index_1.createUser);
router.post('/auth/login', index_1.loginUser);
exports.default = router;
