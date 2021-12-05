const express = require('express')
require('dotenv').config()

const app = express()


app.get('/', async (req,res) => {
    try {
        const conexion = await fetch("http://segunda-imagen:8000", {
            "method": "GET"
        })
        const datos = await conexion.json()
        res.status(200).json(datos)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "No te has podido conectar"
        })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Conectate a traves del puerto ${process.env.PORT}`);
})