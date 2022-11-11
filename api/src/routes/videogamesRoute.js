
const { Router } = require("express");
const router = Router();
const { Videogame, Genre } = require("../db.js");
const { Op } = require("sequelize")



router.get("/", async (req, res) => {
   const { name } = req.query;
   try {
      let juegos15 = await Videogame.findAll()//me trae todos 

      if (name) {
         juegos15 = await Videogame.findAll({
            where: {
               name: {
                  [Op.iLike]: `${name}%`
               }
            },
         });
         if (!juegos15.length) {
            throw new Error("No exite juego con ese nombre")
         }
      }
      res.status(200).send(juegos15);
   } catch (error) {
      res.status(400).send(error.message)
   }
});



router.post("/create", async (req, res) => {

   const {  name, description, released, rating, platforms, imageUrl, genres ,createdInDb} = req.body;

   try {
 
      const crearVideojuego = await Videogame.create({
         name: name,
         description: description,
         released: released,
         rating: rating,
         platforms: platforms,
         imageUrl: imageUrl,
         createdInDb: createdInDb
      });

      if (genres) {

         genres.map( async(genero) => {
            const generoDb = await Genre.findOne({
               where: {
                  name: genero
               }
            })



            crearVideojuego.addGenre(generoDb)
         })
      }
       res.status(200).send("juego creado con exito");

   } catch (error) {
     res.status(404).send(error);
   }

})


module.exports = router;