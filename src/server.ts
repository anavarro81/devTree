import express from 'express';
import router from './router';

const app = express()

app.use('/', (req, res) => {
    res.send('Server is running...')
})

app.use('/user', router);

export default app; 