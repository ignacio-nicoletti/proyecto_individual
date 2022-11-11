const { Router } = require("express");
const router = Router();

const { Genre } = require("../db.js");



router.get("/", async (req, res) => {

    try {
        let GenreApi = await Genre.findAll()
        res.status(200).send(GenreApi);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;