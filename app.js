//En este archivo, colocamos toda la logica para la creacion de nuestro servidor web

import express from 'express';
const app = express();
//const port = process.env.PORT || 3000;
import  mainRoutes  from './src/routes/mainRoutes.js';
import  shopRoutes  from './src/routes/shopRoutes.js';
import  adminRoutes  from './src/routes/adminRoutes.js';
import  authRoutes  from './src/routes/authRoutes.js';

// middlewares
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

/* Motor de Plantillas EJS */
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.use(express.static('public'));
app.use('/',mainRoutes);
app.use('/shop',shopRoutes);
app.use('/auth',authRoutes);
app.use('/admin',adminRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));