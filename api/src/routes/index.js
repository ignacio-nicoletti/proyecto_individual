const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router= Router();

const videogamesRoutes = require('./videogamesRoute')
const videogameRoutes = require('./videogameRoute')
const genreRoutes = require("./genreRoute" )
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRoutes);
router.use('/videogame', videogameRoutes);    
router.use('/genre', genreRoutes);




module.exports= router;
