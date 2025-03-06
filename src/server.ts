import express from 'express';
import router from './router';
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
import 'dotenv/config'
import {connectDB} from './config/bd'

const app = express()

connectDB();

// Permite leer los datos que vienen de un formulario
app.use(express.json())

app.use('/user', router);

app.use('/', (req, res) => {
    res.send('Server is running...')
})





export default app; 