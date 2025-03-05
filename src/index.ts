import server from './server';


const PORT = process.env.PORT || 3000;


server.listen(3000, () => {
    console.log(`[server]: Server is running at port ${PORT}`)
})