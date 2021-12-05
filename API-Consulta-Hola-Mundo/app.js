const express = require('express')
require('dotenv').config()

const app = express()


app.get('/', (req,res) => {
    res.json({
        error: null,
        mensaje: "Conexion correcta"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Conectate a traves del puerto ${process.env.PORT}`);
})