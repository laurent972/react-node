const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5000
//creation du serveur
const app = express();
app.use(express.json())

app.use(express.static('client/build'))

app.get('/api/youtube', (req, res)=>{
    res.send({
        msg: 'Hello les tafouines !'
    })
})

app.get('/*', (_,res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

//J'ecoute mon serveur
app.listen(5000, () => {
    console.log(`Serveur lancé sur le port: ${PORT}`);
})