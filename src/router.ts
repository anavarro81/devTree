import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('User route...')
})

router.post('/auth/register', (req, res) => {
    const { email, password } = req.body;
    res.status(200).json({ email, password });
})

export default router;