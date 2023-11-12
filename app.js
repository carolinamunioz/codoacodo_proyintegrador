//En este archivo, colocamos toda la logica para la creacion de nuestro servidor web

const express = require ('express');
const app = express();

/*app.get('/home', (req, res) => {
    //logica para ir a la BD y traer la info para llenar la pagina
    res.sendFile(__dirname + '/public_html/index.html')
});*/

app.use(express.static('public'));

//app.get('/ping', (req, res) => res.send('pong'));

app.listen(4000, () => console.log("Servidor running on http://localhost:4000"));