import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('User route...')
})

router.post('/auth/register', (req, res) => {
    
})

export default router;