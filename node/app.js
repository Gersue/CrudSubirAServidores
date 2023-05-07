import express from "express";
import cors from 'cors'
//importamos la bd
import db from "./database/db.js";
//importamos enrutadores
import blogRoutes  from "./routes/routes.js";

const app = express();
app.use(cors())
app.use(express.json())
app.use('/blog', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la BD')
} catch (error) {
    console.log(`El error de conexion es : ${error}`)
}

// app.get('/', (req, res) => {
//     res.send('Hola aqui estamos de pie')
// })

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})