
const { Router } = require("express");
const router = Router();
const { Videogame, Genre } = require("../db.js");
const { Op } = require("sequelize")

const axios = require("axios");
const { ApiGame, GameTotal, TotalDetail, ApiDetail, LLamarJuegos} = require("../Controllers/videogameControl.js");




router.get("/", async (req, res) => {
   const { name } = req.query;

   try {

      const juegos = await GameTotal();

      if (name) {
         const Jfiltrado = juegos.filter((juego) =>
            juego.name.toLowerCase().includes(name.toLowerCase()))

         if (Jfiltrado.length) {
            return res.status(200).send(Jfiltrado)
         }
         else { return res.status(400).send("no existe ese juego") }

      }
      res.status(200).send(juegos)
   } catch (error) {
      res.status(400).send(error)
   }
})


router.post("/", async (req, res) => {

   const { name, description, released, rating, platforms, imageUrl, genres, createdInDb } = req.body;

   try {

      

      // let id = 1;
      // const idApi = await GameTotal()
      // const resultado = idApi.map(juego => juego.id)
      // console.log(resultado);

      // while (resultado.includes(id)) {
      //    id++
      // }

      const crearVideojuego = await Videogame.create({
         // id,
         name: name,
         description: description,
         released: released,
         rating: rating,
         platforms: platforms,
         imageUrl: imageUrl,
         createdInDb: createdInDb
      });

      if (genres) {

         genres.map(async (genero) => {
            const generoDb = await Genre.findOne({
               where: {
                  name: genero
               }
            })

            crearVideojuego.addGenre(generoDb)//vincula
         })
      }
      res.status(200).send("juego creado con exito");

   } catch (error) {
      res.status(404).send(error.message);
      console.log(error);
   }

});

//
//
//
//
//
//-----------Modo Pasar Api por la base de datos-------------- 
//
//
//
//
//



// router.get("/", async (req, res) => {
//    const { name } = req.query;
//    try {
//       let juegos15 = await Videogame.findAll()//me trae todos 

//       if (name) {
//          juegos15 = await Videogame.findAll({
//             where: {
//                name: {
//                   [Op.iLike]: `${name}%`
//                }
//             },
//          });
//          if (!juegos15.length) {
//             throw new Error("No exite juego con ese nombre")
//          }
//       }
//       res.status(200).send(juegos15);
//    } catch (error) {
//       res.status(400).send(error.message)
//    }
// });

module.exports = router;