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
router.post('/auth/register', (0, express_validator_1.body)('handle').notEmpty(), index_1.createUser);
exports.default = router;
