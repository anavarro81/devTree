"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('User route...');
});
router.post('/auth/register', (req, res) => {
});
exports.default = router;
