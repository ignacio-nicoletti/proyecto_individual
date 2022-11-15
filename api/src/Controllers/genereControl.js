const axios = require("axios");
const { Genre } = require("../db");

const API_KEY = "568e056812744f16ad009be325069566";

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