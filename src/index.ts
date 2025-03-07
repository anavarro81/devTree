import colors from 'colors';
import server from './server';



const PORT = process.env.PORT || 3000;


server.listen(3000, () => {
    // console.log(`[server]: Server is running at port ${PORT}`.info)    
    console.log(colors.green(`[server]: Server is running at port ${PORT}`))
    
})