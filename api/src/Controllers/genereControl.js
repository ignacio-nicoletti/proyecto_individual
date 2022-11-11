const axios = require("axios");
const { Genre } = require("../db");

const API_KEY = "5423f91210b541c7b628ea556649c0bb";

const ApiGenero = async () => {
        
                let api = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

                const generos = api.data.results.map((genre) => {
                        return {
                                id: genre.id,
                                name: genre.name,
                                
                        };

                })
                const BDGenre = await Genre.bulkCreate(generos);
                return BDGenre;
        
}
module.exports={ApiGenero}