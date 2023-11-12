//En este archivo, colocamos toda la logica para la creacion de nuestro servidor web

const express = require ('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.static('public'));
app.use('/',mainRoutes);
app.use('/shop',shopRoutes);
app.use('/auth',authRoutes);

//app.get('/ping', (req, res) => res.send('pong'));

app.listen(4000, () => console.log("Servidor running on http://localhost:4000"));